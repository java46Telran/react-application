import {Observable, catchError, of} from 'rxjs'
import {map} from "rxjs/operators"
import {CollectionReference, collection, getFirestore, setDoc, doc,
     getDoc, deleteDoc} from 'firebase/firestore';
import appFire from '../config/firebase-config';
import {collectionData} from 'rxfire/firestore'
import CoursesService from './CoursesService';
import { Course } from '../models/Course';
import { OperationCode } from '../models/OperationCode';
import { getRandomNumber } from '../util/random';

const COURSES_COLLECTION_NAME = "courses";
export default class CoursesServiceFirebase implements CoursesService {
    private firestoreCollection: CollectionReference;
    constructor(private minId: number, private maxId: number) {
        try {
            this.firestoreCollection = collection(getFirestore(appFire), COURSES_COLLECTION_NAME );
        } catch (err) {
            throw OperationCode.UNKNOWN;
        }
    }
    private async exists(id: number): Promise<boolean> {
        try {
            const docRef = doc(this.firestoreCollection, id.toString());
            const docSnap = await getDoc(docRef);
            return docSnap.exists();
        } catch (err) {
            throw OperationCode.AUTH_ERROR
        }

    }
    private async setCourse(course: Course) {
        try {
            await setDoc(doc(this.firestoreCollection, course.id.toString()), course);
        } catch (err) {
            throw OperationCode.AUTH_ERROR
        }
    }
    private async getId(): Promise<number> {
        let id: number;
        do {
            id = getRandomNumber(this.minId, this.maxId);
        } while(await this.exists(id));
        return id;
    }
    async add(course: Course): Promise<void> {
        const id =  await this.getId();
        course.id = id;
        this.setCourse(course);

    }
   async remove(id: number): Promise<void> {
       const isExists = await this.exists(id);
       if (!isExists) {
           throw OperationCode.UNKNOWN; //means wrong client functionality
       }
        try {
            await deleteDoc(doc(this.firestoreCollection, id.toString()));
        } catch (error) {
            throw OperationCode.AUTH_ERROR;
        }
    }
    async update(id: number, course: Course): Promise<void> {
        if (course.id !== id) {
            throw OperationCode.UNKNOWN; //means wrong client functionality
        }
        this.setCourse(course);
    }
    async get(): Promise<Course[]> {
        return [];
    }
    getObservableData(): Observable<Course[] | OperationCode> {
        return collectionData(this.firestoreCollection)
        .pipe(map(courses => {
            return (courses as Course[]).map(course => ({...course, openingDate:
              (course.openingDate as any).toDate()})) 
         }), catchError(err => {
            return of(OperationCode.AUTH_ERROR)
        })) as Observable<Course[] | OperationCode>
    }
    
}

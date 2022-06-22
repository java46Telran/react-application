import AuthService from "./AuthService";
import { collection, getFirestore, doc, getDoc } from "firebase/firestore";
import { AuthProvider, FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, TwitterAuthProvider, UserCredential }
    from "firebase/auth";
import { ClientData } from "../models/ClientData";
import LoginData from "../models/LoginData";
import appFirebase from "../config/firebase-config";
import { FACEBOOK, GOOGLE, TWITTER } from "../config/networks-config";
const ADMINISTRATORS_COLLECTION_NAME = 'administrators'
const networkProviders: Map<string, AuthProvider> = new Map( [
    [GOOGLE, new GoogleAuthProvider()],
    [FACEBOOK, new FacebookAuthProvider()]
   
    
])
export default class AuthServiceFirebase implements AuthService {
    getSupportedAuthProviders(): string[] {
        return Array.from(networkProviders.keys());
    }
    authFirebase = getAuth(appFirebase);
    administratorsCollection = collection(getFirestore(appFirebase), ADMINISTRATORS_COLLECTION_NAME);
    login(loginData: LoginData): Promise<boolean | ClientData> {
        
        return !!networkProviders.get(loginData.email) ? this.authPopupProvider(loginData.email) :
            this.authPassword(loginData);
    }
    private async authPassword(loginData: LoginData): Promise<boolean | ClientData> {
        try {
            const userDetails = await signInWithEmailAndPassword(this.authFirebase, loginData.email,
                loginData.password);
            return this.getClientData(userDetails);
        } catch (err) {
            return false;
        }
    }
    async authPopupProvider(providerName: string): Promise<boolean | ClientData> {
         
        try {
            const userDetails = await signInWithPopup(this.authFirebase,
                 networkProviders.get(providerName) as AuthProvider);
            return this.getClientData(userDetails);
        } catch (err) {
            return false;
        }
    }
    private async getClientData(userDetails: UserCredential) {
        const { uid, email, displayName } = userDetails.user;
        return { displayName: displayName || email, email, isAdmin: await this.isAdmin(uid) } as ClientData;
    }
    private async isAdmin(uid: string): Promise<boolean> {
        return (await getDoc(doc(this.administratorsCollection, uid))).exists();
    }

    async logout(): Promise<boolean> {
        try {
            await signOut(this.authFirebase)
            return true;
        } catch (err) {
            return false;
        }
    }

}
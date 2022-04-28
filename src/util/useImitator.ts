import { useDispatch } from "react-redux";
import { ImitatorAction, imitatorActions } from "../config/imitator-config";
import { addCourse } from "../redux/actions";
import { getRandomCourse } from "./randomCourse";
import courseData from "../config/courseData.json"
import { getRandomNumber } from "./random";
export function useImitator() {
    const dispatch = useDispatch();
    setInterval(action, 2000);
    function action() {
        const number = getRandomNumber(0,100);
        const imitatorAction: ImitatorAction = getAction(number);
        switch(imitatorAction.action) {
            case 'add': dispatchAdd(); break;
            case 'remove': dispatchRemove(); break;
            case 'update': dispatchUpdate(); break;
            default: break;
        }
    }
    function dispatchAdd() {
        dispatch(addCourse(getRandomCourse(courseData)));
    }
    function dispatchRemove() {
      //TODO
    }
    function dispatchUpdate() {
      //TODO
    }
}

function getAction(number: any): ImitatorAction {
    for (let i = 0; i < imitatorActions.length; i++) {
        if (number < imitatorActions[i].prob) {
            return imitatorActions[i];
        }
    }
    return imitatorActions[imitatorActions.length - 1];
}

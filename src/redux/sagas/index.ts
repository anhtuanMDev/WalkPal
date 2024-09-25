import { all, fork } from "redux-saga/effects";
import watcherThemeSaga from "./GlobalSaga";

export default function* rootSaga(){
    yield all([
        fork (watcherThemeSaga),
    ])
}
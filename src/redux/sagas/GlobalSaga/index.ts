import { all, fork } from 'redux-saga/effects';
import watchThemeChange from './themeSaga';

export default function* watchGlobal() {
  yield all([
    fork(watchThemeChange)
  ])
}
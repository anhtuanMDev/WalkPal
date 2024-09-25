import {call, put, takeLatest} from 'redux-saga/effects';
import {ACTION} from '../../actions/actionTypes';
import {
  changeThemeAction,
  handleThemeErrorAction,
  updateErrorState,
  updatePendingState,
  updateSuccessState,
} from '../../actions/GlobalActions/index';
import {TActionProp} from '../../reducers/reducerType';
import {useCallback} from 'react';
import {Appearance} from 'react-native';
import {
  darkTheme,
  darkThemeAlpha,
  lightTheme,
  lightThemeAlpha,
} from '../../../themes/colorTheme';

function* handleThemeChange(action: TActionProp<string>) {
  try {
    yield put({
      type: ACTION.GLOBAL.PENDING.UPDATE_CURRENT_PENDING_STATE,
      payload: action?.payload,
    });
    const theme = Appearance.getColorScheme();
    const colorScheme = theme === 'light' ? lightTheme : darkTheme;
    const colorSchemeAlpha =
      theme === 'light' ? lightThemeAlpha : darkThemeAlpha;
    yield put({type: ACTION.GLOBAL.THEME.CHANGE_THEME_SUCCESS, payload: { colorScheme, colorSchemeAlpha}});
  } catch (error) {
    yield put({type: ACTION.GLOBAL.THEME.CHANGE_THEME_FAIL, payload: {error: true, errorMess: error } })
  }
}

export default function* watchThemeChange() {
  yield takeLatest(ACTION.GLOBAL.THEME.UPDATE_THEME_STATE, handleThemeChange);
}

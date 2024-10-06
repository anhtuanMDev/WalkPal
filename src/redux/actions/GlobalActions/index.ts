// Assuming createAction function returns an action object { type, payload }
import {AlphaColorTheme, ColorTheme} from '../../../themes/types';
import createAction from '../../../utils/redux/createAction';
import {ACTION} from '../actionTypes';

export const updatePendingState = (state: boolean) => {
  return createAction(ACTION.GLOBAL.PENDING.UPDATE_CURRENT_PENDING_STATE, {
    state,
  });
};

export const detectThemeChangeAction = () => {
  return createAction(ACTION.GLOBAL.THEME.UPDATE_THEME_STATE);
};

export const changeThemeAction = (
  colorScheme: ColorTheme,
  colorSchemeAlpha: AlphaColorTheme,
) => {
  return createAction(ACTION.GLOBAL.THEME.UPDATE_THEME_STATE, {
    colorScheme,
    colorSchemeAlpha,
  });
};

export const handleThemeErrorAction = (state: boolean, message: string) => {
  return createAction(ACTION.GLOBAL.THEME.CHANGE_THEME_FAIL, {state, message});
};

export const updateSuccessState = (state: boolean, message: string) => {
  return createAction(ACTION.GLOBAL.SUCCESS.UPDATE_SUCCESS_STATE, {
    success: state,
    successMess: message,
  });
};

export const updateErrorState = (state: boolean, message: string) => {
  return createAction(ACTION.GLOBAL.FAILURE.UDPATE_FAILURE_STATE, {
    state,
    message,
  });
};

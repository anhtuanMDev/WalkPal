import { TAppState } from "../reducers/reducerType";

export const selectColorScheme = (state: TAppState) => state.global.colorScheme;
export const selectColorSchemeAlpha = (state: TAppState) => state.global.colorSchemeAlpha;
export const selectLoadingState = (state: TAppState) => state.global.load;
export const selectSuccess = (state: TAppState) => state.global.success;
export const selectSuccessMess = (state: TAppState) => state.global.successMess;
export const selectError = (state: TAppState) => state.global.error;
export const selectErrorMess = (state: TAppState) => state.global.errorMess;

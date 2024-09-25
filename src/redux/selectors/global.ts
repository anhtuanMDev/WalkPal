import { TGlobalState } from "../reducers/reducerType";

export const selectColorScheme = (state: TGlobalState) => state.colorScheme;
export const selectColorSchemeAlpha = (state: TGlobalState) => state.colorSchemeAlpha;
export const selectLoadingState = (state: TGlobalState) => state.load;
export const selectSuccess = (state: TGlobalState) => state.success;
export const selectSuccessMess = (state: TGlobalState) => state.successMess;
export const selectError = (state: TGlobalState) => state.error;
export const selectErrorMess = (state: TGlobalState) => state.errorMess;

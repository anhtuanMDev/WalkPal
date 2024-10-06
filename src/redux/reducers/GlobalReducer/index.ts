import {lightTheme, lightThemeAlpha} from '../../../themes/colorTheme';
import {ACTION} from '../../actions/actionTypes';
import type {TActionProp, TGlobalState} from '../reducerType';

const initialState: TGlobalState = {
  load: false,
  colorScheme: lightTheme,
  colorSchemeAlpha: lightThemeAlpha,
  error: false,
  success: false,
  successMess: '',
  errorMess: '',
};

const globalReducer = (
  state = initialState,
  action: TActionProp<TGlobalState>,
): TGlobalState => {
  if(state !== undefined ){switch (action.type) {
    case ACTION.GLOBAL.PENDING.UPDATE_CURRENT_PENDING_STATE:
      return {
        ...state,
        load: action.payload?.load ?? false,
      };

    case ACTION.GLOBAL.THEME.CHANGE_THEME_SUCCESS:
      return {
        ...state,
        load: false,
        colorScheme: action?.payload?.colorScheme ?? lightTheme,
        colorSchemeAlpha: action?.payload?.colorSchemeAlpha ?? lightThemeAlpha,
        success: true,
        successMess: action?.payload?.successMess ?? 'Update Theme successfully',
      };

    case ACTION.GLOBAL.THEME.CHANGE_THEME_FAIL:
      return {
        ...state,
        load: false,
        error: action?.payload?.error ?? true,
        errorMess: action?.payload?.errorMess ?? "There's an empty error message in store",
      };

      case ACTION.GLOBAL.SUCCESS.UPDATE_SUCCESS_STATE:
        console.log("Call success", action.payload)
        console.log(state)
        return {
          ...state,
          success: action.payload?.success || false,
          successMess: action.payload?.successMess || "Empty Success Message",
        };
      

    case ACTION.GLOBAL.FAILURE.UDPATE_FAILURE_STATE:
      return {
        ...state,
        error: action?.payload?.error ?? false,  // Default to false for error
        errorMess: action?.payload?.errorMess ?? '',  // Default to empty string for error message
      };

    default:
      return state;  // Return unmodified state
  }} else return initialState;
};

export default globalReducer;

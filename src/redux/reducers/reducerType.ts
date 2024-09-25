    import {AlphaColorTheme, ColorTheme} from '../../themes/types';
    
    export type TActionProp<T> = {
      type: string;
      payload?: T;
    };
    
    export type TGlobalState = 
    {
      load: boolean;
      colorScheme: ColorTheme;
      colorSchemeAlpha: AlphaColorTheme;
      success: boolean,
      error: boolean,
      successMess: string,
      errorMess: string
    };
    
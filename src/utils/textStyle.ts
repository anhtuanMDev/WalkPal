import {getSize} from './responsive';

export const renderStyleText = (
    size: number,
    fontWeight: FontWeight,
  ) => {
    return {
      fontWeight,
      fontSize: getSize.m(size),
    };
  };
  

type FontWeight = 
  | 'normal' 
  | 'bold' 
  | '100' 
  | '200' 
  | '300' 
  | '400' 
  | '500' 
  | '600' 
  | '700' 
  | '800' 
  | '900';


type  TextDecorationLine = "underline" | "none" | "line-through" | "underline line-through"

export const textStyle = {
    link:{
        s: {
            ...renderStyleText(14, '700' ),
            textDecorationLine: 'underline' as TextDecorationLine,
          },
          m: {
            ...renderStyleText(16, '700'),
            textDecorationLine: 'underline' as TextDecorationLine,
          },
          xs: {
            ...renderStyleText(12, '700'),
            textDecorationLine: 'underline' as TextDecorationLine,
          },
    },
    header: {
      h1: renderStyleText(56, '700'),
      h2: renderStyleText(50, '700'),
      h3: renderStyleText(44, '500'),
      h4: renderStyleText(38, '500'),
      h5: renderStyleText(32, '500'),
      h6: renderStyleText(26, 'normal'),
      h7: renderStyleText(20, 'normal'),
      h8: renderStyleText(14, 'normal'),

    },
    title: {},
    content: {}
}
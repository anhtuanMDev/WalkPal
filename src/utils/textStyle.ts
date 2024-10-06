import {TextStyle} from 'react-native';
import {getSize} from './responsive';

export const renderStyleText = (size: number, fontWeight: FontWeight) => {
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

export const textStyle = {
  link: {
    s: {
      ...renderStyleText(14, '700'),
      textDecorationLine: 'underline' as Pick<
        TextStyle,
        'textDecorationLine'
      >['textDecorationLine'],
    },
    m: {
      ...renderStyleText(16, '700'),
      textDecorationLine: 'underline' as TextStyle['textDecorationLine'],
    },
    xs: {
      ...renderStyleText(12, '700'),
      textDecorationLine: 'underline' as TextStyle['textDecorationLine'],
    },
  },
  button: {
    fill: {
      boldAllCap: {
        ...renderStyleText(24, '700'),
        textTransform: 'uppercase' as Pick<TextStyle, 'textTransform'>['textTransform']
      },
      capture: {
        ...renderStyleText(18, '600'),
        textTransform: 'none' as Pick<TextStyle, 'textTransform'>['textTransform']
      }
    },
  },
  header: {
    h1: renderStyleText(56, '700'),
    h2: renderStyleText(50, '700'),
    h3: renderStyleText(44, '700'),
    h4: renderStyleText(38, '700'),
    h5: renderStyleText(32, '700'),
    hb6: renderStyleText(26, '700'),
    hb7: renderStyleText(20, '700'),
    hb8: renderStyleText(14, '700'),
    h6: renderStyleText(26, 'normal'),
    h7: renderStyleText(20, 'normal'),
    h8: renderStyleText(14, 'normal'),
  },
  title: {
    label: renderStyleText(14, '500'),
    labelCAP: {
      ...renderStyleText(14, '500'),
      textTransform: 'uppercase' as TextStyle['textTransform']
    },
    context: renderStyleText(16, '400')
  },
  content: {
    error: renderStyleText(14, '600')
  },
};

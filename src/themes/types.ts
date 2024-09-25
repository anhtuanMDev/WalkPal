export interface ColorTheme {
  primary: string;
  secondary: string;
  tertiary: string;
  accent: string;
  background: string;
  text: string;
  link: string;
  specialText: string;
}

interface AlphaColor {
  alpha20: string;
  alpha50: string;
  alpha70: string;
}

export interface AlphaColorTheme {
  primary: AlphaColor;
  secondary: AlphaColor;
  tertiary: AlphaColor;
  accent: AlphaColor;
  background: AlphaColor;
  text: AlphaColor;
  link: AlphaColor;
  specialText: AlphaColor;
}

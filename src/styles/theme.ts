import {DefaultTheme} from '@react-navigation/native';
import {extendTheme} from 'native-base';

export const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#503bd8',
    background: 'white',
    text: 'white',
  },
};

export const theme = extendTheme({
  colors: {
    primary: {
      50: '#ece9ff',
      100: '#c6bef7',
      200: '#a095ec',
      300: '#4f55ea',
      400: '#503bd8', // primary color
      500: '#3b26bf',
      600: '#2d1e96',
      700: '#20146c',
      800: '#120c43',
      900: '#07031c',
    },
    secondary: {
      50: '#dfffe5',
      100: '#b2febe',
      200: '#82fb95',
      300: '#52fa6c',
      400: '#25f843',
      500: '#4AD118',
      600: '#05aa1f', // secondary color
      700: '#06BB37',
      800: '#004a0a',
      900: '#001b00',
    },
    tertiary: {
      50: '#fff4db',
      100: '#ffe2ad',
      200: '#ffce7e',
      300: '#fdba4c',
      400: '#fda81f', //tertiary color
      500: '#e38d02',
      600: '#b16e00',
      700: '#7f4e00',
      800: '#4d2e00',
      900: '#1d0f00',
    },
    gray: {
      50: '#feeff2',
      100: '#ded7d9',
      200: '#c2bebf',
      300: '#a7a5a6',
      400: '#808080',
      500: '#707070',
      600: '#5a5959',
      700: '#423f40',
      800: '#2a2526',
      900: '#17080d',
    },
    other: {
      grayShade70Opacity22: 'rgba(112,112,112,0.22)',
      greenShade05Opacity14: 'rgba(5,170,31,0.14)',
      greenShade1COpacity60: 'rgba(28, 211, 84, 0.6)',
      greenShade6COpacity00: 'rgba(108, 255, 82, 0)',
    },
  },
  fontConfig: {
    SFProDisplay: {
      100: {
        normal: 'SFProDisplay-Ultralight',
        italic: 'SFProDisplay-UltralightItalic',
      },
      200: {
        normal: 'SFProDisplay-Thin',
        italic: 'SFProDisplay-ThinItalic',
      },
      300: {
        normal: 'SFProDisplay-Light',
        italic: 'SFProDisplay-LightItalic',
      },
      400: {
        normal: 'SFProDisplay-Regular',
        italic: 'SFProDisplay-RegularItalic',
      },
      500: {
        normal: 'SFProDisplay-Medium',
        italic: 'SFProDisplay-MediumItalic',
      },
      600: {
        normal: 'SFProDisplay-Semibold',
        italic: 'SFProDisplay-SemiboldItalic',
      },
      700: {
        normal: 'SFProDisplay-Bold',
        italic: 'SFProDisplay-BoldItalic',
      },
      800: {
        normal: 'SFProDisplay-Black',
        italic: 'SFProDisplay-BlackItalic',
      },
      900: {
        normal: 'SFProDisplay-Heavy',
        italic: 'SFProDisplay-HeavyItalic',
      },
    },
  },
  fonts: {
    heading: 'SFProDisplay',
    body: 'SFProDisplay',
    mono: 'SFProDisplay',
    button: 'SFProDisplay',
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fontSizes: {
    '2xs': 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
    '4xl': 32,
    '5xl': 36,
    '10xl': 56,
  },
  lineHeights: {
    '2xs': 16,
    xs: 18,
    sm: 20,
    md: 22,
    lg: 24,
    xl: 28,
    '2xl': 32,
    '3xl': 36,
    '5xl': 48,
    '6xl': 60,
    '10xl': 84,
  },
  space: {
    '1': 4,
    '2': 8,
    '3': 12,
    '4': 16,
    '4.5': 18,
    '5.5': 22,
    5: 20,
    6: 24,
    '7.5': 30,
    '8.5': 34,
    11: 44,
    13: 52,
    '13.5': 54,
    '14': 56,
    '15': 60,
    '17.5': 70,
    '22': 88,
    '23': 92,
    '25': 100,
    '35': 140,
  },
  sizes: {
    '4.5': '10px',
    9: '36px',
    12: '48px',
    '12.5': '50px',
    14: '56px',
    15: '60px',
    17: '72px',
    30: '120px',
  },
});

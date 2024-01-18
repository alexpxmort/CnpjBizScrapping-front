const blue = {
  10: '#E5EDFA',
  20: '#EDF4FF',
  30: '#D6E6FF',
  40: '#C2D9FF',
  50: '#81B1FF',
  100: '#498EFF',
  200: '#1970FF',
  300: '#004ECC',
  400: '#005BEF',
  500: '#0041A9',
  600: '#00368C',
  700: '#002D74',
  800: '#002560',
  900: '#001F50'
};

const neutral = {
  50: '#F3F6F9',
  100: '#EBF0F5',
  200: '#DBE3EC',
  300: '#CED4DA',
  400: '#B1C2D5',
  600: '#9DB2CA',
  700: '#495057',
  800: '#343A40',
  810: '#7996B7',
  900: '#698AAE'
};

const green = {
  50: '#E6F2EF',
  100: '#008566'
};

const gray = {
  50: '#F7FAFC',
  100: '#EDF2F7',
  101: '#E5EDFA',
  200: '#E2E8F0',
  250: '#E5E5E5',
  300: '#CBD5E0',
  400: '#A0AEC0',
  500: '#A0AEC0',
  600: '#4A5568',
  700: '#2D3748',
  800: '#1A202C',
  900: '#171923',
  901: '#EBF0F5',
  903: '#9DB2CA',
  904: '#3C5871',
  905: '#2C4053',
  906: '#52799A',
  907: '#334B61',
  908: '#445566',
  909: '#698AAE',
  910: '#F1F3F5'
};

const negative = {
  100: '#FAEDE8',
  400: '#F04008',
  500: '#BC3206'
};

const positive = {
  100: '#E0F0ED',
  500: '#008566'
};

const warning = {
  100: '#F7E5B9',
  500: '#B9560A'
};

const orange = {
  500: '#FF8A00'
};

const red = {
  100: '#F6E4DF',
  300: '#BC3206'
};

const white = '#FFFFFF';

const yellow = '#f3eb1b';

const colors = {
  blue,
  gray,
  green,
  brand: {
    primary: blue['300'],
    ...blue
  },
  neutral,
  positive: {
    primary: '#008566',
    secondary: '#00B88D',
    additional: '#EDFFFB',
    ...positive
  },
  negative: {
    primary: negative[500],
    secondary: negative[400],
    additional: negative[100],
    ...negative
  },
  warning: {
    ...warning
  },
  dark: {
    neutral: {
      300: '#263747',
      400: '#2C4053',
      600: '#334B61',
      700: '#3C5871',
      900: '#52799A'
    }
  },
  surface: {
    100: neutral[50],
    200: neutral[100],
    300: neutral[200],
    500: neutral[400],
    600: neutral[600],
    800: neutral[810],
    900: neutral[900]
  },
  pink: '#BC3206',
  white,
  orange,
  red,
  yellow
} as const;

export default colors;

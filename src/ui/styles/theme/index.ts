import { ChakraTheme, extendTheme } from '@chakra-ui/react';

import { Button, FormLabel, Input, Textarea, Divider, Select, Checkbox, Radio } from './components/';
import { colors, fontSizes } from './foundations/';

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px'
};

const customTheme: Partial<ChakraTheme> = {
  colors,
  fontSizes,
  config: {
    initialColorMode: 'light'
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },

  components: {
    FormLabel,
    Button,
    Input,
    Textarea,
    Divider,
    Select,
    Checkbox,
    Radio
  }
};

export const theme = extendTheme({ ...customTheme, breakpoints });

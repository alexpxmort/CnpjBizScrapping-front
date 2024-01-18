import type { SystemStyleInterpolation } from '@chakra-ui/theme-tools';

import { baseStyle as InputBaseStyle, variants as InputVariants, sizes as InputSizes } from './Input';

const baseStyle = {
  ...InputBaseStyle.field
};

const variants: Record<string, SystemStyleInterpolation> = {
  filled: props => InputVariants.filled(props).field ?? {}
};

const sizes = {
  xl: InputSizes.xl.field ?? {},
  sm: InputSizes.sm.field ?? {},
  md: InputSizes.md.field ?? {},
  lg: InputSizes.lg.field ?? {}
};

const defaultProps = {
  size: 'md',
  variant: 'filled',
  colorScheme: 'brand'
};

const TextArea = {
  baseStyle,
  variants,
  sizes,
  defaultProps
};

export default TextArea;

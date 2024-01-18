import { ComponentDefaultProps, ComponentStyleConfig } from '@chakra-ui/react';
import { SystemStyleInterpolation, SystemStyleFunction, SystemStyleObject } from '@chakra-ui/theme-tools';

const hasAlternativeBG = (color: string): boolean => {
  return color === 'negative';
};
const hasPrimaryColor = (color: string): boolean => {
  return color === 'brand' || color === 'negative' || color === 'positive';
};

const neutral400Color = 'neutral.400';
const disabledStyle: SystemStyleObject = {
  bg: 'neutral.200',
  color: neutral400Color
};
const transparent = 'transparent';

const baseStyle: SystemStyleObject = {
  borderRadius: '0.5rem',
  lineHeight: 6,
  fontWeight: 'medium',
  _disabled: {
    ...disabledStyle
  },
  _hover: {
    _disabled: disabledStyle
  }
};

const sizes: SystemStyleObject = {
  sm: {
    fontSize: 'sm',
    py: 1,
    px: 6,
    height: 8
  },
  md: {
    fontSize: 'sm',
    py: 2,
    px: 6,
    height: 10
  },
  lg: {
    fontSize: 'sm',
    py: 3,
    px: 6,
    height: 12
  },
  xl: {
    fontSize: 'sm',
    py: 5,
    px: 6,
    height: 16
  }
};

const variantFilled: SystemStyleFunction = props => {
  const { colorScheme: color } = props;

  return {
    color: 'white',
    bg: color === 'brand' ? `${color}.primary` : `${color}.300`,
    _hover: {
      bg: `${color}.400`
    },
    _active: {
      bg: `${color}.500`
    }
  };
};

const disabledStyleOutline = {
  bg: transparent,
  color: neutral400Color,
  borderColor: neutral400Color
};

const variantOutline: SystemStyleFunction = props => {
  const { colorScheme: color } = props;

  return {
    color: color === 'brand' ? `${color}.primary` : `${color}.300`,
    bg: transparent,

    _active: {
      bg: 'neutral.100',
      color: color === 'brand' ? `${color}.primary` : `${color}.300`
    },

    _hover: {
      color: color === 'brand' ? `${color}.primary` : `${color}.300`,
      bg: 'neutral.50',
      _disabled: disabledStyleOutline
    },
    _disabled: {
      ...disabledStyleOutline
    }
  };
};
const variantGhost: SystemStyleFunction = props => {
  const { colorScheme: color } = props;
  let active = '500';
  let hover = '400';

  const bg = hasAlternativeBG(color) ? color : 'surface';
  if (hasPrimaryColor(color)) {
    active = 'primary';
    hover = 'primary';
  }

  return {
    color: `${color}.${active}`,
    bg: transparent,

    _active: {
      bg: `${bg}.200`,
      color: `${color}.${active}`
    },

    _hover: {
      color: `${color}.${hover}`,
      bg: `${bg}.100`,
      _disabled: disabledStyleOutline
    },
    _disabled: {
      bg: transparent,
      color: `surface.500`
    }
  };
};

const variants: Record<string, SystemStyleInterpolation> = {
  filled: variantFilled,
  outline: variantOutline,
  ghost: variantGhost
};

const defaultProps: ComponentDefaultProps = {
  variant: 'filled',
  colorScheme: 'brand',
  size: 'md'
};

const Button: ComponentStyleConfig = {
  baseStyle,
  sizes,
  variants,
  defaultProps
};

export default Button;

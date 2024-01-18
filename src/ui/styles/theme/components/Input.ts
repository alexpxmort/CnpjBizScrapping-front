import { inputAnatomy as parts } from '@chakra-ui/anatomy';
import { ComponentDefaultProps, ComponentStyleConfig } from '@chakra-ui/react';
import { PartsStyleFunction, PartsStyleObject, SystemStyleObject } from '@chakra-ui/theme-tools';

const borderRadius = '0.5rem';
const fontSize = 'md';
const colorNeutral50 = 'neutral.50';
const colorNeutral100 = 'neutral.100';
const colorNeutral200 = 'neutral.200';
const colorDarkNeutral400 = 'dark.neutral.400';
const colorPositivePrimary = 'positive.primary';
const colorPositiveAdditional = 'positive.additional';

export const baseStyle: PartsStyleObject<typeof parts> = {
  field: {
    width: '100%',
    minWidth: 0,
    outline: 0,
    position: 'relative',
    appearance: 'none',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    color: colorDarkNeutral400,
    border: '1px solid',
    borderColor: colorNeutral100,
    bg: colorNeutral50
  }
};

const size: SystemStyleObject = {
  sm: {
    borderRadius,
    fontSize,
    height: 10
  },
  md: {
    borderRadius,
    fontSize,
    height: 12
  },
  lg: {
    borderRadius,
    fontSize,
    height: 14
  },
  xl: {
    borderRadius,
    fontSize,
    height: 16,
    paddingLeft: 4,
    paddingRight: 4
  }
};

export const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  sm: {
    field: size.sm,
    addon: size.sm
  },
  md: {
    field: size.md,
    addon: size.md
  },
  lg: {
    field: size.lg,
    addon: size.lg
  },
  xl: {
    field: size.xl,
    addon: size.xl
  }
};

const variantFilled: PartsStyleFunction<typeof parts> = props => {
  const { colorScheme: color } = props;

  const colorTheme = color === 'brand' ? `${color}.primary` : `${color}.300`;

  const bordersColor = {
    borderTopColor: colorTheme,
    borderRightColor: colorTheme,
    borderBottomColor: colorTheme,
    borderLeftColor: colorTheme
  };

  return {
    field: {
      color: colorDarkNeutral400,
      border: '1px solid',
      borderColor: colorNeutral100,
      bg: colorNeutral50,
      _placeholder: {
        fontSize: 'md',
        color: 'neutral.600'
      },
      _hover: {
        borderColor: 'neutral.600',
        bg: colorNeutral50
      },
      _focus: {
        border: '2px solid',
        ...bordersColor,
        bg: colorNeutral50
      },
      _disabled: {
        color: colorNeutral200,
        borderColor: colorNeutral100,
        bg: colorNeutral50,
        opacity: 1,
        cursor: 'not-allowed',
        _placeholder: {
          color: colorNeutral200
        }
      },
      _invalid: {
        color: colorDarkNeutral400,
        borderColor: 'negative.primary',
        bg: 'negative.additional'
      }
    },
    addon: {}
  };
};

const variantSuccess: SystemStyleObject = {
  field: {
    fontSize: 'md',
    color: colorDarkNeutral400,
    border: '1px solid',
    borderColor: colorPositivePrimary,
    bg: colorPositiveAdditional,
    _placeholder: {
      fontSize: 'md',
      color: colorDarkNeutral400
    },
    _hover: {
      color: colorDarkNeutral400,
      border: '1px solid',
      borderColor: colorPositivePrimary,
      bg: colorPositiveAdditional
    },
    _focus: {
      color: colorDarkNeutral400,
      border: '1px solid',
      borderColor: colorPositivePrimary,
      bg: colorPositiveAdditional
    },
    _disabled: {
      opacity: 0.4,
      color: colorDarkNeutral400,
      border: '1px solid',
      borderColor: colorPositivePrimary,
      bg: colorPositiveAdditional,
      _placeholder: {
        color: colorNeutral200
      }
    },
    _invalid: {
      color: colorDarkNeutral400,
      border: '1px solid',
      borderColor: colorPositivePrimary,
      bg: colorPositiveAdditional
    }
  },
  addon: {}
};

export const variants = {
  filled: variantFilled,
  success: variantSuccess
};

const defaultProps: ComponentDefaultProps = {
  variant: 'filled',
  colorScheme: 'brand'
};

const Input: ComponentStyleConfig = {
  baseStyle,
  sizes,
  variants,
  defaultProps
};

export default Input;

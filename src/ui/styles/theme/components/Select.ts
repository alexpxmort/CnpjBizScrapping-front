import { selectAnatomy as parts } from '@chakra-ui/anatomy';
import { ComponentDefaultProps, ComponentStyleConfig } from '@chakra-ui/react';
import { PartsStyleFunction, PartsStyleObject } from '@chakra-ui/theme-tools';

const colorWhite = 'white';
const colorDarkNeutral400 = 'dark.neutral.400';

export const baseStyle: PartsStyleObject<typeof parts> = {
  field: {
    color: colorDarkNeutral400,
    backgroundColor: colorWhite
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const variantOutline: PartsStyleFunction<typeof parts> = props => {
  return {
    field: {
      _invalid: {
        color: colorDarkNeutral400,
        borderColor: 'negative.primary',
        bg: 'negative.additional'
      }
    }
  };
};
const variantNotFilled: PartsStyleFunction<typeof parts> = props => {
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
      color: 'surface.600',
      _hover: {
        borderColor: 'neutral.600'
      },
      _focus: {
        border: '2px solid',
        ...bordersColor
      }
    }
  };
};

export const variants = {
  outline: variantOutline,
  notfilled: variantNotFilled
};

const defaultProps: ComponentDefaultProps = {
  variant: 'outline',
  colorScheme: 'brand'
};

const Select: ComponentStyleConfig = {
  variants,
  baseStyle,
  defaultProps
};

export default Select;

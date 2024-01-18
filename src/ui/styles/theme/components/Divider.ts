import { ComponentDefaultProps, ComponentStyleConfig, SystemStyleObject } from '@chakra-ui/react';
import { SystemStyleInterpolation, SystemStyleFunction } from '@chakra-ui/theme-tools';

const baseStyle: SystemStyleObject = {};

const variantDashed: SystemStyleFunction = props => {
  const { colorScheme: color } = props;
  return {
    opacity: 1,
    borderColor: color
  };
};

const variantSolid = variantDashed;

const variants: Record<string, SystemStyleInterpolation> = {
  dashed: variantDashed,
  solid: variantSolid
};

const defaultProps: ComponentDefaultProps = {
  variant: 'solid'
};

const Divider: ComponentStyleConfig = {
  defaultProps,
  variants,
  baseStyle
};

export default Divider;

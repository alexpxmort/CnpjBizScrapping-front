import { checkboxAnatomy as parts } from '@chakra-ui/anatomy';
import { PartsStyleFunction, SystemStyleFunction, mode } from '@chakra-ui/theme-tools';

const baseStyleControl: SystemStyleFunction = props => {
  const { colorScheme: c } = props;

  return {
    _checked: {
      bg: mode(`${c}.300`, `${c}.200`)(props),
      borderColor: mode(`${c}.300`, `${c}.200`)(props)
    }
  };
};

export const baseStyle: PartsStyleFunction<typeof parts> = props => ({
  control: baseStyleControl(props)
});

const Checkbox = {
  baseStyle
};

export default Checkbox;

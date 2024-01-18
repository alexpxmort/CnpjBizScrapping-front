import { radioAnatomy as parts } from '@chakra-ui/anatomy';
import { PartsStyleFunction, SystemStyleFunction } from '@chakra-ui/theme-tools';

import Checkbox from './CheckBox';

const baseStyleControl: SystemStyleFunction = props => {
  const { control = {} } = Checkbox.baseStyle(props);

  return {
    ...control
  };
};

const baseStyle: PartsStyleFunction<typeof parts> = props => ({
  label: Checkbox.baseStyle(props).label,
  control: baseStyleControl(props)
});

const Radio = { baseStyle };

export default Radio;

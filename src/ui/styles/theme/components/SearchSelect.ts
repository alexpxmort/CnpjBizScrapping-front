/* eslint-disable @typescript-eslint/no-explicit-any */
import colors from '../foundations/colors';

const searchSelect = ({ width = '100%', height = '3.5rem', error = false, menuListHeight = '' }) => ({
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: colors.surface['600'],
    background: error ? colors.red['100'] : colors.neutral['50']
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    background: error ? colors.red['100'] : colors.neutral['50']
  }),
  clearIndicator: (provided: any) => ({
    ...provided,
    color: colors.surface['600'],
    background: error ? colors.red['100'] : colors.neutral['50']
  }),
  control: (provided: any) => ({
    ...provided,
    paddingLeft: 10,
    background: error ? colors.red['100'] : colors.neutral['50'],
    height: '3.5rem',
    border: 'none'
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    width,
    height: '3rem',
    background: error ? colors.red['100'] : colors.neutral['50']
  }),
  container: (provided: any) => ({
    ...provided,
    width,
    height,
    borderRadius: 5,
    border: error ? `2px solid ${colors.red['300']}` : 'none',
    background: error ? colors.red['100'] : colors.neutral['50']
  }),
  placeholder: (defaultStyles: any) => ({
    ...defaultStyles,
    color: colors.gray['903']
  }),
  menuList: (provided: any) => {
    return menuListHeight
      ? {
          ...provided,
          maxHeight: menuListHeight
        }
      : {
          ...provided
        };
  }
});

export default searchSelect;

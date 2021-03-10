import { Styles } from "react-select";

const customStyles: Styles<any, any> = {
  container: (provided, _state) => ({
    ...provided,
    borderColor: '#383C56',
    marginRight: '16px',
    flex: 1,
  }),
  control: (provided, state) => {
    const controlStyles = {
      borderColor: state.isFocused ? '#2C54EA' : '#383C56',
      boxShadow: state.isFocused ? '0 0 0 1px #2C54EA' : 'none',
    };

    return {
      ...provided,
      ...controlStyles,
      background: '#202437',
      ":hover": {
        borderColor: '#2C54EA',
      },
    }
  },
  menu: (provided, _state) => ({
    ...provided,
    background: '#202437',
  }),
  placeholder: (provided, _state) => ({
    ...provided,
    color: 'rgba(255, 255, 255, 0.3)',
    fontSize: '13px',
  }),
  option: (provided, state) => {
    const backgroundColor = state.isFocused ? 'rgba(255, 255, 255, 0.1)' : 'transparent';

    return {
      ...provided,
      backgroundColor,
    };
  },
  input: (provided, _state) => ({
    ...provided,
    fontSize: '13px',
    color: '#8C9DB5',
  }),
  multiValue: (provided, state) => ({
    ...provided,
    background: 'transparent',
    border: '1px solid #EE748F',
    borderRadius: '6px',
    justifyContent: 'space-between',
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
    color: '#EE748F',
    fontSize: '11px',
    lineHeight: '20px',
  }),
  multiValueRemove: (provided, state) => ({
    ...provided,
    color: '#EE748F',
    ':hover': {
      backgroundColor: '#EE748F',
      color: '#FFF',
    },
  }),
}

export default customStyles;

import { CSSProperties } from 'react';
import { ClassNamesState } from 'react-select';

const selectStyles = {
  control: (base: CSSProperties, state: ClassNamesState) => ({
    ...base,
    cursor: 'pointer',
    background: 'rgb(249, 250, 251)',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: state.isFocused ? 'rgb(109, 40, 217)' : 'rgb(229, 231, 235)',
    boxShadow: 'none',
    borderRadius: '12px',
    padding: '2px',
    '&:hover': {
      borderColor: 'rgb(109, 40, 217)',
    },
  }),
  placeholder: (base: CSSProperties) => {
    return {
      ...base,
      color: 'rgb(156, 163, 175)',
      fontSize: '0.875rem',
      lineHeight: '1rem',
    };
  },
  option: (base: CSSProperties, state: ClassNamesState) => ({
    ...base,
    fontSize: '0.875rem',
    lineHeight: '1rem',
    cursor: 'pointer',
    backgroundColor: '#ede9fe',
    color: state.isSelected ? 'rgb(0, 0, 0)' : 'rgb(107, 114, 128)',
    '&:hover': {
      backgroundColor: 'rgb(109, 40, 217)',
      color: 'rgb(255, 255, 255)',
    },
  }),
  singleValue: (base: CSSProperties) => ({
    ...base,
    color: '#581c87',
    fontSize: '1rem',
    lineHeight: '1.5rem',
  }),
};

export default selectStyles;

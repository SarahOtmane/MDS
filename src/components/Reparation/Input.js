import React from 'react';
import Select from 'react-select';

const Input = ({ name }) => {
  const colourOptions = [
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ];

  const colourStyles = {
    control: (styles, { isFocused }) => ({
      ...styles,
      backgroundColor: 'white',
      borderColor: isFocused ? 'green' : styles.borderColor,
      boxShadow: isFocused ? '0 0 0 1px green' : styles.boxShadow,
      '&:hover': {
        borderColor: isFocused ? 'green' : styles['&:hover'].borderColor,
      },
    }),
    option: (styles, { isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? 'green'
          : isFocused
          ? 'pink'
          : undefined,
        color: isDisabled
          ? '#ccc'
          : isSelected
          ? 'white'
          : 'black',
        cursor: isDisabled ? 'not-allowed' : 'default',

        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? isSelected
              ? 'green'
              : 'pink'
            : undefined,
        },
      };
    },
    input: (styles) => ({ ...styles }),
    placeholder: (styles) => ({ ...styles }),
    singleValue: (styles) => ({ ...styles, color: 'black' }),
  };

  let placeholder = "";

  if (name === 'categorie') placeholder = "Catégorie";
  else if (name === 'clotheType') placeholder = "Type de vêtements";
  else if (name === 'clotheMatiere') placeholder = "Matière du vêtement";
  else if (name === 'reparationType') placeholder = "Type de réparation";
  else if (name === 'besoinType') placeholder = "Type de besoin";

  return (
    <Select
      className="input"
      classNamePrefix="select"
      placeholder={placeholder}
      isClearable={true}
      name={name}
      options={colourOptions}
      styles={colourStyles}
    />
  );
};

export default Input;

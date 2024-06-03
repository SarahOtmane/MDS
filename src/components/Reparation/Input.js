import React from 'react';
import Select from 'react-select';

const Input = ({ name }) => {
    const valueOptions = [
        { value: 'Test', label: 'TEST' },
        { value: 'Okay', label: 'OKAY' },
        { value: 'Faux', label: 'FAUX' },
        { value: 'Vrai', label: 'VRAI' },
    ];

    const valueStyles = {
        control: (styles, { isFocused }) => ({
            ...styles,
            backgroundColor: 'white',
            borderColor: isFocused ? '#BDDEB4' : 'black',
            boxShadow: isFocused ? '0 0 0 1px #BDDEB4' : styles.boxShadow,
            '&:hover': {
              borderColor: isFocused ? '#BDDEB4' : 'black',
            },
            height: '4rem',
        }),
        option: (styles, { isFocused, isSelected }) => ({
            ...styles,
            backgroundColor: isSelected
                ? '#BDDEB4'
                : isFocused
                ? 'rgba(189, 222, 180, 0.4)'
                : '#F6F6F6',
            color: '#1E1E1E',
            cursor: 'default',
            ':active': {
                ...styles[':active'],
                backgroundColor: isSelected ? '#BDDEB4' : 'rgba(189, 222, 180, 0.4)',
            },
          }),
          input: (styles) => ({ ...styles, color: '#1E1E1E' }),
          singleValue: (styles) => ({ ...styles, color: '#1E1E1E' }),
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
            options={valueOptions}
            styles={valueStyles}
        />
    );
};

export default Input;

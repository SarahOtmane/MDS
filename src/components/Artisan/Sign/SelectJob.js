import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SelectJob = () => {
    const [valueOptions, setValueOptions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getJobs = async () => {
            try {
                const response = await axios.get('http://localhost:3003/jobs/');
                setValueOptions(response.data);
            } catch (error) {
                const status = error.response ? error.response.status : 500;
                switch (status) {
                    case 500:
                        navigate('/error500');
                        break;
                    default:
                        console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
                }  
            }
        };

        getJobs();
    }, [navigate]);

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

    return (
        <Select
            className="input"
            classNamePrefix="select"
            placeholder='Choisissez votre expertise'
            isClearable={true}
            options={valueOptions}
            styles={valueStyles}
        />
    );
};

export default SelectJob;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const Input = ({ name, command, setCommand }) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const getOptions = async () => {
            try {
                let formattedOptions = [];
                if (name === "categorie" || name === "clotheType") {
                    const clothesResponse = await axios.get(`http://localhost:3003/clothes/job/${command.id_job}`);
                    const clothes = clothesResponse.data;
                    if (name === "categorie") {
                        formattedOptions = clothes.map(clothe => ({ value: clothe.id, label: clothe.categorie }));
                    } else {
                        formattedOptions = clothes.map(clothe => ({ value: clothe.id, label: clothe.clothType }));
                    }
                } else if (name === 'reparationType') {
                    const prestationsResponse = await axios.get(`http://localhost:3003/prestations/job/${command.id_job}`);
                    const prestations = prestationsResponse.data;
                    formattedOptions = prestations.map(prestation => ({ value: prestation.id, label: prestation.reparationType }));
                } else if (name === 'besoinType') {
                    formattedOptions = [
                        { value: command.id_job, label: command.job },
                        { value: 'personnalisation', label: 'personnalisation' }
                    ];
                }else if(name === 'broderieType'){
                    formattedOptions = [
                        { value: 'initial', label: 'Initial' },
                        { value: 'lettres', label: 'Lettres' },
                        { value: 'dessin', label: 'Dessin' }
                    ];
                }else if(name === 'fontSize'){
                    formattedOptions = [
                        { value: 'petite police', label: 'Petite police' },
                        { value: 'moyenne police', label: 'Moyenne police' },
                        { value: 'grande police', label: 'Grande police' }
                    ];
                }

                // Filter unique labels
                const uniqueOptions = Array.from(new Set(formattedOptions.map(option => option.label)))
                    .map(label => {
                        return formattedOptions.find(option => option.label === label);
                    });

                setOptions(uniqueOptions);
            } catch (error) {
                console.error('Erreur lors de la récupération des options:', error);
            }
        };

        if (command.id_job) {
            getOptions();
        }
    }, [name, command.id_job, command.job]);

    const handleChange = (selectedOption) => {
        setCommand(prevCommand => ({
            ...prevCommand,
            [name]: selectedOption ? selectedOption.label : null
        }));
    };

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
    else if (name === 'reparationType') placeholder = "Type de réparation";
    else if (name === 'besoinType') placeholder = "Type de besoin";

    return (
        <Select
            className="input"
            classNamePrefix="select"
            placeholder={placeholder}
            isClearable={true}
            name={name}
            options={options}
            styles={valueStyles}
            onChange={handleChange}
        />
    );
};

export default Input;

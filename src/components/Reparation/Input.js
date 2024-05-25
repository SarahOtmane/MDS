
import Select from 'react-select';

const Input = ({name}) =>{

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

    let placeholder="";

    if(name === 'categorie') placeholder="Catégorie"
    else if(name === 'clotheType') placeholder="Type de vêtement"
    else if(name === 'clotheMatiere') placeholder="Matière du vêtement"
    else if(name === 'reparationType') placeholder="Type de réparation"
    else if(name === 'besoinType') placeholder="Type de besoin"

    return(
        <Select
        className="basic-single"
        classNamePrefix="select"
        placeholder={placeholder}
        isClearable= 'true'
        name="color"
        options={colourOptions}
      />
    )
}

export default Input;
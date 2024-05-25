
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

    return(
        <Select
        className="basic-single"
        classNamePrefix={name}
        isClearable= 'true'
        name="color"
        options={colourOptions}
      />
    )
}

export default Input;
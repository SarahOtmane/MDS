import SelectForm from "./Select";


const InputLabel = ({command, setCommand, name, label}) =>{
    return(
        <>
            <label>{label}</label>
            <SelectForm name={name} command={command} setCommand={setCommand} />
        </>
    )
}

export default InputLabel;
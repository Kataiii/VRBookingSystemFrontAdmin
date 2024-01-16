import styles from "./styles/Input.module.css";


interface InputProps{
    placeholder: string;
    type: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

const Input: React.FC<InputProps> = ({placeholder, type, onChange}) => {
    return(
        <input className={[styles.Input, styles].join(' ')} type={type} placeholder={placeholder} onChange={onChange}/>
    )
}


export default Input;
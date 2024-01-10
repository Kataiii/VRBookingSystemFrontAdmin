import styles from "./styles/Input.module.css";


interface InputProps{
    placeholder: string;
    type: string;
}

const Input: React.FC<InputProps> = ({placeholder, type}) => {
    return(
        <input className={styles.Input} type={type} placeholder={placeholder}/>
    )
}


export default Input;
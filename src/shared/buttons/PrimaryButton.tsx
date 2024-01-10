import styles from './styles/PrimaryButton.module.css';

export interface PrimaryButtonProps{
    content: string;
    onClick: () => void
}


const PrimaryButton: React.FC<PrimaryButtonProps> = ({content, onClick}) => {
    return(
        <button className={styles.PrimaryButton} onClick={onClick}>{content}</button>
    )
}

export default PrimaryButton;
import PrimaryButton from "../shared/buttons/PrimaryButton";
import Input from "../shared/inputs/Input";

const FormLogin: React.FC = () => {
    return (
        <div>
            <h1>Вход</h1>
            <Input placeholder={"Номер телефона"} type={"phone"}/>
            <Input placeholder={"Пароль"} type={"password"}/>
            <PrimaryButton content={"Войти"} onClick={() => console.log('Ура')}/>
        </div>
    )
}

export default FormLogin;
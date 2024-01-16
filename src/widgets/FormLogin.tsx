import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "..";
import { IClient } from "../enemy/Client";
import { AuthResponse } from "../enemy/response/AuthResponse";
import PrimaryButton from "../shared/buttons/PrimaryButton";
import useInput from "../shared/hooks/useInput";
import Input from "../shared/inputs/Input";

const FormLogin: React.FC = observer(() => {
    const navigate = useNavigate();
    const { store, auth } = useContext(Context);
    const phone = useInput();
    const password = useInput();

    const handleClick = async () => {
        auth.setPhone(phone.value);
        auth.setPassword(password.value);
        const response: AuthResponse | null = await auth.auth();

        if (response == null) {
            store.setIsAuth(false);
            store.setIsFailAuth(true);
            navigate('/login');
            return;
        }
        else {

            store.access = response?.accessToken || '';
            store.client = response?.account || {} as IClient;
            store.isAuth = true;
            store.isFailAuth = false;
            navigate('/admin');

        }
    }

    return (
        <div>
            <h1>Вход</h1>
            <Input placeholder={"Номер телефона"} type={"phone"} onChange={phone.onChange} />
            <Input placeholder={"Пароль"} type={"password"} onChange={password.onChange} />
            <PrimaryButton content={"Войти"} onClick={handleClick} />
        </div>
    )
})

export default FormLogin;
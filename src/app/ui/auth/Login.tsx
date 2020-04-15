import React, { FC } from 'react';
import { DefaultButton as Button } from 'app/ui/common/Button';
import {
    useHistory,
} from 'react-router-dom';

interface LoginProps { }

const Login: FC<LoginProps> = () => {

    const history = useHistory();

    const login = () => {
        history.replace({ pathname: '/' });
    };

    return (
        <div>
            <Button onClick={login}>Entrar</Button>
        </div>
    );

};

export default Login;

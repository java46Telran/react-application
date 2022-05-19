import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { ClientData } from "../../models/ClientData";
import LoginData from "../../models/LoginData";
import { authAction } from "../../redux/actions";
import AuthServiceClient from "../../service/AuthServiceClient";
import LoginForm from "../forms/LoginForm";

 const authService = new AuthServiceClient();
const Login: React.FC = () =>
{
    const dispatch = useDispatch();
    return <LoginForm submitFn={function (loginData: LoginData): void {
        const clientData = authService.login(loginData);
        if (!!clientData) {
            dispatch(authAction(clientData as ClientData))
        }
    }  }/>
}


    
export default Login;
import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGIN_PATH } from "../../config/routes-config";
import { authService } from "../../config/service-config";
import { emptyClientData } from "../../models/ClientData";
import { authAction } from "../../redux/actions";

const Logout: React.FC = () =>
{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function onLogout() {
        if (authService.logout()) {
            dispatch(authAction(emptyClientData));
            navigate(LOGIN_PATH);
        }

    }
    return <Button onClick={onLogout}>Logout</Button>
}
export default Logout;
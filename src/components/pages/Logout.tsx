import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { emptyClientData } from "../../models/ClientData";
import { authAction } from "../../redux/actions";
const Logout: React.FC = () =>
{
    const dispatch = useDispatch();
    return <Button onClick={() => dispatch(authAction(emptyClientData))}>Logout</Button>
}
export default Logout;
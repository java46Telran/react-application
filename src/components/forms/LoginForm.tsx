import React from "react";
import LoginData from "../../models/LoginData";
type Props = {
    submitFn: (loginData: LoginData)=>void;
}
let inputElement: any;
const LoginForm: React.FC<Props> = ({submitFn}) => {
    function onLogin() {
        const loginValue: string = inputElement.value;
        const loginTokens: string[] = loginValue.split(';');
        submitFn({email: loginTokens[0], password: loginTokens[1]});
    }
    React.useEffect(()=>{
        inputElement = document.getElementById("input-id")
    })
    return <div>
        <input id="input-id"/>
        <button onClick={onLogin}>login</button>
    </div>
}
export default LoginForm
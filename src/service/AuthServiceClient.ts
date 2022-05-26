import { userInfo } from "os";
import { ClientData } from "../models/ClientData";
import LoginData from "../models/LoginData";
import AuthService from "./AuthService";
const accounts: any[] = [
    {email: "user@gmail.com", password: "user1234", role: "USER"},
    {email: "admin@gmail.com", password: "admin1234", role: "ADMIN"}
]
export default class AuthServiceClient implements AuthService {
    async login(loginData: LoginData): Promise<boolean | ClientData> {
        const account = accounts
        .find(a => loginData.email === a.email && loginData.password === a.password);
        return !!account ? {email: loginData.email, displayName: loginData.email,
             isAdmin: account.role === "ADMIN"} : false; 
    }
    async logout(): Promise<boolean> {
        return true
    }

}
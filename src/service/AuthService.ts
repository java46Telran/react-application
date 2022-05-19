import { ClientData } from "../models/ClientData";
import LoginData from "../models/LoginData";

export default interface AuthService {
    login(loginData: LoginData): ClientData | boolean ;
    logout():boolean;
}
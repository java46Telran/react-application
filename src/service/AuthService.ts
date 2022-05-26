import { ClientData } from "../models/ClientData";
import LoginData from "../models/LoginData";

export default interface AuthService {
    login(loginData: LoginData): Promise<ClientData | boolean> ;
    logout():Promise<boolean>;
}
import { ClientData } from "../models/ClientData";
import LoginData from "../models/LoginData";
import AuthService from "./AuthService";
export const AUTH_TOKEN_ITEM = "auth-token";
export default class AuthServiceJwt implements AuthService {
    constructor(private url: string) {}
    async login(loginData: LoginData): Promise<boolean | ClientData> {
       const response = await fetch(this.url, {
           method: "POST",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify(loginData)
       });
      return response.ok ? getClientData(response) : false;
    }
    async logout(): Promise<boolean> {
        return true;
    }
    
}
async function getClientData(response: Response): Promise<ClientData> {
    const payload: any = await getJwtPayload(response);
    return {displayName: payload.email, email: payload.email, isAdmin: +payload.sub === 1};
}
async function getJwtPayload(response: Response): Promise<any> {
    const loginResponse = await response.json();
    const authToken: string = loginResponse.accessToken;
    localStorage.setItem(AUTH_TOKEN_ITEM, authToken);
    const rowPayload = authToken.split('.')[1];
    const payloadJson = atob(rowPayload);
    return JSON.parse(payloadJson);
}

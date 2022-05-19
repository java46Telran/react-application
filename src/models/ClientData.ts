export type ClientData = {
    email: string;
    displayName: string;
    isAdmin: boolean
}
export const emptyClientData: ClientData = {email: '', displayName: '', isAdmin: false}
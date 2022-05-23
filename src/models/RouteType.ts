import { ReactNode } from "react";

export type RouteType = {
    path: string;
    label: string;
    element: ReactNode;
    authenticated?: boolean; //if true route item may be shown only if a client is authenticated
    administrator?: boolean;
}
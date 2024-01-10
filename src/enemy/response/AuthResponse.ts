import { IClient } from "../Client";

export interface AuthResponse{
    accessToken: string;
    refreshToken: string;
    client: IClient;
}
export interface PayloadJwt{
    iss: string;
    sub: string;
    userId: number;
    iat: number;
    exp: number;
}
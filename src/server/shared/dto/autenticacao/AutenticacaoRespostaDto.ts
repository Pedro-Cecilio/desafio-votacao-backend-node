export class AutenticacaoRespostaDto {
    token: string;
    admin: boolean;

    constructor(token: string, admin: boolean) {
        this.token = token
        this.admin = admin
    }
}
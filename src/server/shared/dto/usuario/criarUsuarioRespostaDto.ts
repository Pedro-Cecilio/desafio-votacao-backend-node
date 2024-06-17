export class CriarUsuarioRespostaDto{
    id: number;
    nome: string;
    sobrenome: string;
    email: string;
    cpf: string;
    admin: boolean;

    public constructor(id: number, nome: string, sobrenome: string, email: string, cpf: string, admin: boolean){
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.admin = admin;
    }
}
import { Autenticacao, Usuario } from "@prisma/client";

export interface AutenticacaoCompleta extends Autenticacao{
    usuario: Usuario;
}
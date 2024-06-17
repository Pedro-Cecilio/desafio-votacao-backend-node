import { Autenticacao, Usuario } from "@prisma/client";
import { prisma } from "../../database/database";

export const criar = async (email: string, senha: string, usuario: Usuario): Promise<Autenticacao> =>{
    return await prisma.autenticacao.create({
        data:{
            email,
            senha,
            usuario: {
                connect:{
                    id: usuario.id
                }
            }
        }
    })
}
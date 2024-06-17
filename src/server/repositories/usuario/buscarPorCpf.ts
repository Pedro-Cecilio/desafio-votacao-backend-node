import { Usuario } from "@prisma/client";
import { prisma } from "../../database/database";

export const buscarPorCpf = async (cpf: string): Promise<Usuario | null> =>{
    return await prisma.usuario.findUnique({
        where: {
            cpf: cpf
        }
    })
}
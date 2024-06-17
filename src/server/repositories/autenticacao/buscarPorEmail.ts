import { Autenticacao } from "@prisma/client"
import { prisma } from "../../database/database"

export const buscarPorEmail = async (email: string): Promise<Autenticacao | null> => {
    return await prisma.autenticacao.findUnique({
        where: {
            email
        }
    })
}
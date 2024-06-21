import { Autenticacao } from "@prisma/client"
import { prisma } from "../../database/database"

export const buscarPorUsuarioId = async (usuarioId: number): Promise<Autenticacao> => {
    return await prisma.autenticacao.findUniqueOrThrow({
        where: {
            usuarioId
        }
    })
}
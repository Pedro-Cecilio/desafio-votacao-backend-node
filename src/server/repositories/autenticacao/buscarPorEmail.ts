import { prisma } from "../../database/database"
import { AutenticacaoCompleta } from "../../shared/interface/autenticacao/AutenticacaoCompleta"

export const buscarPorEmail = async (email: string): Promise<AutenticacaoCompleta | null> => {
    return await prisma.autenticacao.findUnique({
        where: {
            email
        },
        include: {
            usuario: true
        }
    })
}
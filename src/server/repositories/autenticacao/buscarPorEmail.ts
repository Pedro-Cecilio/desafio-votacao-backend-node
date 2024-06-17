import { prisma } from "../../database/database"

export const buscarPorEmail = async (email: string) => {
    return await prisma.autenticacao.findUnique({
        where: {
            email
        },
        include:{
            usuario: true
        }
    })
}
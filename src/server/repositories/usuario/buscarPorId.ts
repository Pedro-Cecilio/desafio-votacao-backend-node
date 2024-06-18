import { Usuario } from "@prisma/client"
import { prisma } from "../../database/database"

export const buscarPorId = async (id: number) : Promise<Usuario | null> => {
    return await prisma.usuario.findUnique({
        where:{
            id: id
        }
    })
}
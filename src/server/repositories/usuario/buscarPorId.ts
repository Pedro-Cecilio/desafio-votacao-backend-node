import { Usuario } from "@prisma/client"
import { prisma } from "../../database/database"

export const buscarPorId = async (id: number) : Promise<Usuario> => {
    return await prisma.usuario.findUniqueOrThrow({
        where:{
            id: id
        }
    })
}
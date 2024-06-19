import { prisma } from "../../database/database"
import { PautaCompleta } from "../../shared/interface/pauta/PautaCompleta"

export const buscarPorIdEUsuarioId = async (id: number, usuarioId: number): Promise<PautaCompleta> => {
    return prisma.pauta.findFirstOrThrow({
        where: {
            id,
            usuarioId
        },
        include: {
            usuario: true,
            sessaoVotacao: true
        }
    })
}
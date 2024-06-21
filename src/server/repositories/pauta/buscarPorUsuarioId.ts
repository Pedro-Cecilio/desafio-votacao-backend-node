import { prisma } from "../../database/database"
import { PautaCompleta } from "../../shared/interface/pauta/PautaCompleta"

export const buscarPorUsuarioId = async (usuarioId: number): Promise<PautaCompleta[]>=>{
    return await prisma.pauta.findMany({
        where:{
            usuarioId
        },
        include:{
            usuario: true,
            sessaoVotacao: {
                include:{
                    votos: true,
                    pauta: true
                }
            }
        }
    })
}
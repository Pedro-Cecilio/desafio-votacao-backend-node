import { prisma } from "../../database/database"
import { PautaCompleta } from "../../shared/interface/pauta/PautaCompleta"

export const buscarAtivaPorId = async (id: number): Promise<PautaCompleta>=>{
    return await prisma.pauta.findFirstOrThrow({
        where:{
            id,
            sessaoVotacao: {
                dataFechamento: {
                    gt: new Date()
                }
            }
        },
        include:{
            usuario: true,
            sessaoVotacao: {
                include:{
                    pauta: true,
                    votos: true
                }
            }
        }
    })
}
import { prisma } from "../../database/database"
import { PautaCompleta } from "../../shared/interface/pauta/PautaCompleta"

export const buscarAtivas = async (): Promise<PautaCompleta[]> => {
    return await prisma.pauta.findMany({
        where: {
            sessaoVotacao:{
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
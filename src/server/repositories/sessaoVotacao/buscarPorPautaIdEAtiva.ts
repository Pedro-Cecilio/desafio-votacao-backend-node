import { prisma } from "../../database/database"
import { SessaoVotacaoCompleta } from "../../shared/interface/sessaoVotacao/SessaoVotacaoCompleta"

export const buscarPorPautaIdEAtiva = async (pautaId: number): Promise<SessaoVotacaoCompleta>=> {
    return await prisma.sessaoVotacao.findFirstOrThrow({
        where: {
            pautaId,
            dataFechamento: {
                gt: new Date()
            }
        },
        include:{
            pauta: true,
            votos: true
        }
    })
}
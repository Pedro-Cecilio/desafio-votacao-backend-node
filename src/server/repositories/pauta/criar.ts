import { prisma } from "../../database/database";
import { CriarPautaDto } from "../../shared/dto/pauta/CriarPautaDto";
import { PautaCompleta } from "../../shared/interface/pauta/PautaCompleta";

export const criar = async (dados: CriarPautaDto, usuarioId: number) : Promise<PautaCompleta> => {
    return await prisma.pauta.create({
        data:{
            assunto:dados.assunto,
            categoria: dados.categoria,
            usuario: {
                connect:{
                    id: usuarioId
                }
            }
        },
        include:{
            usuario: true,
            sessaoVotacao: true
        }
    })
}
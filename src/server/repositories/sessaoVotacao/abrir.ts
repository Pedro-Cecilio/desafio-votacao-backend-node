import { Pauta } from "@prisma/client";
import { prisma } from "../../database/database";
import { SessaoVotacaoCompleta } from "../../shared/interface/sessaoVotacao/SessaoVotacaoCompleta";

export const abrir = async (pauta: Pauta, dataAbertura: Date, dataFechamento: Date) : Promise<SessaoVotacaoCompleta> => {
    return await prisma.sessaoVotacao.create({
        data:{
            dataAbertura: dataAbertura,
            dataFechamento: dataFechamento, 
            pauta: {
                connect:{
                    id: pauta.id
                }
            }
        },
        include:{
            pauta: true,
            votos: true
        }
    })
}
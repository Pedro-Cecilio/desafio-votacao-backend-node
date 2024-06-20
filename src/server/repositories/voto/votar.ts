import { Prisma, SessaoVotacao, TipoDeVoto } from "@prisma/client";
import { prisma } from "../../database/database";
import { VotoCompleto } from "../../shared/interface/voto/VotoCompleto";

export const votar = async (cpf: string, tipoDeVoto: TipoDeVoto, sessaoVotacao: SessaoVotacao, usuarioId: number | null): Promise<VotoCompleto> => {
    const data: Prisma.VotoCreateInput = {
        cpf,
        tipoDeVoto,
        SessaoVotacao: {
            connect: {
                id: sessaoVotacao.id
            }
        }
    }
    if (usuarioId != null) {
        data.usuario = {
            connect:{
                id: usuarioId
            }
        }
    }
    return await prisma.voto.create({
        data,
        include:{
            usuario: true,
            SessaoVotacao: {
                include:{
                    votos: true,
                    pauta: true
                }
            }
        }
    })
}
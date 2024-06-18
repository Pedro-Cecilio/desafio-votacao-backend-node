import { prisma } from "../../database/database";
import { CriarPautaDto } from "../../shared/dto/pauta/CriarPautaDto";

export const criar = async (dados: CriarPautaDto, usuarioId: number) => {
    return prisma.pauta.create({
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
        }
    })
}
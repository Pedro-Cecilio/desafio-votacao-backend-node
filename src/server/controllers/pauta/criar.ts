import { FastifyReply } from "fastify";
import { CriarPautaDto } from "../../shared/dto/pauta/CriarPautaDto";
import { plainToClass } from "class-transformer";
import { pautaService } from "../../shared/services/pauta";
import { FastifyRequestVotacao } from "../../shared/interface/FastifyRequestVotacao";

export const criar = async (request: FastifyRequestVotacao, reply: FastifyReply) => {
    const dados: CriarPautaDto = plainToClass(CriarPautaDto, request.body)
    const usuarioId = request.dadosToken!.userId
    return await pautaService.criar(dados, usuarioId)
}
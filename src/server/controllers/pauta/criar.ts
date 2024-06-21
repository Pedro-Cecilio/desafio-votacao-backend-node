import { CriarPautaDto } from "../../shared/dto/pauta/CriarPautaDto";
import { plainToClass } from "class-transformer";
import { pautaService } from "../../shared/services/pauta";
import { FastifyReply, FastifyRequest } from "fastify";

export const criar = async (request: FastifyRequest, reply: FastifyReply) => {
    const dados: CriarPautaDto = plainToClass(CriarPautaDto, request.body)
    const usuarioId = request.dadosToken!.userId
    reply.status(201).send(await pautaService.criar(dados, usuarioId))
}
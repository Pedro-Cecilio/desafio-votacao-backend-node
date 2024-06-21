import { FastifyReply, FastifyRequest } from "fastify";
import { pautaService } from "../../shared/services/pauta";

export const buscarPorUsuarioId = async (request: FastifyRequest, reply: FastifyReply) => {
    const usuarioId = request.dadosToken!.userId
    reply.status(200).send(await pautaService.buscarPorUsuarioId(usuarioId))
}
import { FastifyReply, FastifyRequest } from "fastify";
import { pautaService } from "../../shared/services/pauta";

export const buscarAtivas = async (request: FastifyRequest, reply: FastifyReply) => {
    reply.status(200).send(await pautaService.buscarAtivas())
}
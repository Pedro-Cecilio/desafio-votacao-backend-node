import { FastifyReply, FastifyRequest } from "fastify";
import { pautaService } from "../../shared/services/pauta";
import { RouteParamId } from "../../shared/interface/RouteParamId";

export const buscarAtivaPorId = async (request: FastifyRequest<{ Params: RouteParamId }>, reply: FastifyReply) => {
    const id = request.params.id
    reply.status(200).send(await pautaService.buscarAtivaPorId(id))
}
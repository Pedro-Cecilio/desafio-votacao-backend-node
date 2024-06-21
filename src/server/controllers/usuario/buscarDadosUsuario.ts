import { FastifyReply, FastifyRequest } from "fastify";
import { usuarioService } from "../../shared/services/usuario";

export const buscarDadosUsuario = async (request: FastifyRequest, reply: FastifyReply) => {
    const id = request.dadosToken!.userId
    reply.status(200).send(await usuarioService.buscarPorId(id))
}
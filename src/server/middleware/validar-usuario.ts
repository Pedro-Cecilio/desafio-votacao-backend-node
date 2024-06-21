import { FastifyReply, HookHandlerDoneFunction } from "fastify";
import { FastifyRequestVotacao } from "../shared/interface/fastify/FastifyRequestVotacao";
import { usuarioRepository } from "../repositories/usuario";

export const validarUsuario = async (request: FastifyRequestVotacao, reply: FastifyReply, done: HookHandlerDoneFunction) => {
    try {
        const id = request.dadosToken!.userId;
        await usuarioRepository.buscarPorId(id)
        done()
    } catch (error) {
        reply.status(401).send()
    }

}
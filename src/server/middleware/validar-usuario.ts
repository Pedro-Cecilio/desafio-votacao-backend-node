import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";
import { usuarioRepository } from "../repositories/usuario";

export const validarUsuario = async (request: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) => {
    try {
        const id = request.dadosToken!.userId;
        await usuarioRepository.buscarPorId(id)
        done()
    } catch (error) {
        reply.status(401).send()
    }

}
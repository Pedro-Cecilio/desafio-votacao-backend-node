import { FastifyReply, FastifyRequest } from "fastify";
import { Usuario } from "@prisma/client";
import { usuarioRepository } from "../repositories/usuario";
import { ValidacaoErro } from "../shared/exececoes/erros";

export const validarAdmin = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const id = request.dadosToken!.userId;
        const usuario: Usuario = await usuarioRepository.buscarPorId(id)
        if (!usuario.admin) throw new ValidacaoErro("Não autorizado.")
    } catch (error) {
        reply.status(401).send()
    }
}
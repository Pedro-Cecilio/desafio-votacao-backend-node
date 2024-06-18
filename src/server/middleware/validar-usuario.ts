import { FastifyReply, HookHandlerDoneFunction } from "fastify";
import { FastifyRequestVotacao } from "../shared/interface/FastifyRequestVotacao";
import { Usuario } from "@prisma/client";
import { usuarioRepository } from "../repositories/usuario";

export const validarUsuario = async (request: FastifyRequestVotacao, reply: FastifyReply, done: HookHandlerDoneFunction)=>{
    const id = request.dadosToken!.userId;
    const usuario: Usuario | null = await usuarioRepository.buscarPorId(id)
    if(!usuario){
        reply.status(401).send()
    }
    done()
}
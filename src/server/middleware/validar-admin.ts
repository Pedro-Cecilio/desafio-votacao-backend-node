import { FastifyReply, HookHandlerDoneFunction } from "fastify";
import { FastifyRequestVotacao } from "../shared/interface/fastify/FastifyRequestVotacao";
import { Usuario } from "@prisma/client";
import { usuarioRepository } from "../repositories/usuario";

export const validarAdmin = async (request: FastifyRequestVotacao, reply: FastifyReply, done: HookHandlerDoneFunction)=>{
    const id = request.dadosToken!.userId;
    const usuario: Usuario | null = await usuarioRepository.buscarPorId(id)
    if(!usuario?.admin){
        reply.status(401).send()
    }
    done()
}
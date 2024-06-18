import { FastifyReply, HookHandlerDoneFunction } from "fastify";
import { FastifyRequestMiddleware } from "../shared/interface/FastifyRequestMiddleware";
import { Usuario } from "@prisma/client";
import { usuarioRepository } from "../repositories/usuario";

export const validarAdmin = async (request: FastifyRequestMiddleware, reply: FastifyReply, done: HookHandlerDoneFunction)=>{
    const id = request.dadosToken!.userId;
    const usuario: Usuario | null = await usuarioRepository.buscarPorId(id)
    if(!usuario?.admin){
        reply.status(401).send()
    }
    done()
}
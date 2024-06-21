import { FastifyReply, HookHandlerDoneFunction } from "fastify";
import jwt from 'jsonwebtoken';
import { PayloadJwt } from "../shared/interface/jwt/PayloadJwt";
import { FastifyRequestVotacao } from "../shared/interface/fastify/FastifyRequestVotacao";


export const verificarToken = (request: FastifyRequestVotacao, reply: FastifyReply, done: HookHandlerDoneFunction) => {
    const chave: string = process.env.JWT_SECRET!
    const token : string = obterToken(request)
    try {
        const dados = jwt.verify(token, chave) as PayloadJwt
        request.dadosToken = dados
        done()
    } catch (error) {
        reply.status(401).send()
    }
    
}

export const obterToken = (request: FastifyRequestVotacao): string => {
    const authorization: string = request.headers.authorization ?? ""
    return authorization.split(" ")[1]
}
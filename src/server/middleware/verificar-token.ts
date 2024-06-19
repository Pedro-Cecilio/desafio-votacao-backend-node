import { FastifyReply, HookHandlerDoneFunction } from "fastify";
import jwt from 'jsonwebtoken';
import { PayloadJwt } from "../shared/interface/jwt/PayloadJwt";
import { FastifyRequestVotacao } from "../shared/interface/fastify/FastifyRequestVotacao";


export const verificarToken = (request: FastifyRequestVotacao, reply: FastifyReply, done: HookHandlerDoneFunction) => {
    const key: string = process.env.JWT_SECRET!
    const authorization: string = request.headers.authorization ?? ""
    try {
        const token = authorization.split(" ")[1]
        const payload = jwt.verify(token, key) as PayloadJwt
        request.dadosToken = payload
    } catch (error) {
        reply.status(401).send()
    }
    done()
}
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { VotacaoErro } from './erros';

export function registerErrorHandler(app: FastifyInstance) {
    app.setErrorHandler((error: VotacaoErro | Error, request: FastifyRequest, reply: FastifyReply) => {
        const statusCode = error instanceof VotacaoErro ? error.statusCode : 500;
        const mensagem = error instanceof VotacaoErro ? error.message : 'Internal Server Error';
        console.log(error)
        reply.status(statusCode).send({
            mensagem,
            statusCode,
        });
    });
}
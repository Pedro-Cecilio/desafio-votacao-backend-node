import { plainToClass } from "class-transformer"
import { FastifyReply, FastifyRequest } from "fastify"
import { AutenticacaoDto } from "../../shared/dto/autenticacao/AutenticacaoDto"
import { autenticacaoService } from "../../shared/services/autenticacao"

export  const autenticar = async (request: FastifyRequest, reply: FastifyReply) => {
    const dados: AutenticacaoDto = plainToClass(AutenticacaoDto, request.body ?? {})
    reply.status(200).send(await autenticacaoService.autenticar(dados))
}
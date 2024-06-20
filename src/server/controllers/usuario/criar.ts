import { FastifyReply, FastifyRequest } from "fastify";
import { plainToClass } from "class-transformer";
import { CriarUsuarioDto } from "../../shared/dto/usuario/CriarUsuarioDto";
import { usuarioService } from "../../shared/services/usuario";

export const criar = async (request: FastifyRequest, reply: FastifyReply) => {
    const criarUsuarioDto = plainToClass(CriarUsuarioDto, request.body ?? {})
    reply.status(201).send(await usuarioService.criar(criarUsuarioDto))
}
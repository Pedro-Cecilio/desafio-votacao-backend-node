import { FastifyReply, FastifyRequest } from "fastify";
import { AbrirSessaoDto } from "../../shared/dto/sessaoVotacao/AbrirVotacaoDto";
import { plainToClass } from "class-transformer";
import { sessaoVotacaoService } from "../../shared/services/sessaoVotacao";

export const abrir  = async (request: FastifyRequest, reply: FastifyReply)=>{
    const dados : AbrirSessaoDto = plainToClass(AbrirSessaoDto, request.body)
    const usuarioId = request.dadosToken!.userId
    reply.status(200).send(await sessaoVotacaoService.abrir(dados, usuarioId));
}
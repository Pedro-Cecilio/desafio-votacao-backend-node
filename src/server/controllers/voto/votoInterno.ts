import { FastifyReply } from "fastify";
import { InserirVotoInternoDto } from "../../shared/dto/voto/InserirVotoInternoDto";
import { plainToClass } from "class-transformer";
import { votoService } from "../../shared/services/voto";
import { FastifyRequestVotacao } from "../../shared/interface/fastify/FastifyRequestVotacao";

export const votoInterno = async (request: FastifyRequestVotacao, reply: FastifyReply)=>{
    const inserirVotoInternoDto: InserirVotoInternoDto = plainToClass(InserirVotoInternoDto, request.body)
    const usuarioId = request.dadosToken!.userId
    reply.send(await votoService.votoInterno(inserirVotoInternoDto, usuarioId))
}
import { FastifyReply, FastifyRequest } from "fastify";
import { InserirVotoInternoDto } from "../../shared/dto/voto/InserirVotoInternoDto";
import { plainToClass } from "class-transformer";
import { votoService } from "../../shared/services/voto";

export const votoInterno = async (request: FastifyRequest, reply: FastifyReply)=>{
    const inserirVotoInternoDto: InserirVotoInternoDto = plainToClass(InserirVotoInternoDto, request.body)
    const usuarioId = request.dadosToken!.userId
    reply.send(await votoService.votoInterno(inserirVotoInternoDto, usuarioId))
}
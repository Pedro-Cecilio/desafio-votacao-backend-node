import { FastifyReply } from "fastify";
import { plainToClass } from "class-transformer";
import { votoService } from "../../shared/services/voto";
import { FastifyRequestVotacao } from "../../shared/interface/fastify/FastifyRequestVotacao";
import { InserirVotoExternoDto } from "../../shared/dto/voto/InserirVotoExternoDto";

export const votoExterno = async (request: FastifyRequestVotacao, reply: FastifyReply)=>{
    const inserirVotoExternoDto: InserirVotoExternoDto = plainToClass(InserirVotoExternoDto, request.body)
    reply.send(await votoService.votoExterno(inserirVotoExternoDto))
}
import { FastifyRequest } from "fastify";
import { PayloadJwt } from "./PayloadJwt";

export interface FastifyRequestVotacao extends FastifyRequest{
    dadosToken?: PayloadJwt
}
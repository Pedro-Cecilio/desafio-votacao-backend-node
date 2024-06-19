import { FastifyRequest } from "fastify";
import { PayloadJwt } from "../jwt/PayloadJwt";

export interface FastifyRequestVotacao extends FastifyRequest{
    dadosToken?: PayloadJwt
}
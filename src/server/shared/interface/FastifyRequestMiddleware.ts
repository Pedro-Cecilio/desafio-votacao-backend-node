import { FastifyRequest } from "fastify";
import { PayloadJwt } from "./PayloadJwt";

export interface FastifyRequestMiddleware extends FastifyRequest{
    dadosToken?: PayloadJwt
}
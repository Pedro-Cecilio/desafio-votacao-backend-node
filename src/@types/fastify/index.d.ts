import { FastifyRequest } from 'fastify';
import { PayloadJwt } from '../../server/shared/interface/jwt/PayloadJwt';

declare module 'fastify'{
    interface FastifyRequest{
        dadosToken?: PayloadJwt
    }
}
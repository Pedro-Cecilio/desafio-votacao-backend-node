import { FastifyReply, FastifyRequest } from "fastify"

export  const autenticar = async (request: FastifyRequest, reply: FastifyReply) => {
    reply.status(200).send("Hello World")
}
import { FastifyInstance } from 'fastify'
import { AutenticacaoController } from '../controllers/autenticacao'


export async function autenticacaoRoutes(app: FastifyInstance) {
    app.post('/auth', AutenticacaoController.autenticar)
}
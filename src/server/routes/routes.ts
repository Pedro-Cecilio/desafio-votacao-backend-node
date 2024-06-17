import { FastifyInstance } from 'fastify'
import { UsuarioController } from '../controllers/usuario'
import { AutenticacaoController } from '../controllers/autenticacao'


export async function routes(app: FastifyInstance) {
    app.post('/usuarios', UsuarioController.criar)

    app.post('/auth', AutenticacaoController.autenticar)
}
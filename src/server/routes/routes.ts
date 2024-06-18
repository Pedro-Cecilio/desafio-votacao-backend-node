import { FastifyInstance } from 'fastify'
import { UsuarioController } from '../controllers/usuario'
import { AutenticacaoController } from '../controllers/autenticacao'
import { verificarToken } from '../middleware/verificar-token'
import { validarAdmin } from '../middleware/validar-admin'


export async function routes(app: FastifyInstance) {
    app.post('/usuarios', {
        preHandler: [verificarToken, validarAdmin]
    },
        UsuarioController.criar)

    app.post('/auth', AutenticacaoController.autenticar)
}
import { FastifyInstance } from 'fastify'
import { UsuarioController } from '../controllers/usuario'


export async function routes(app: FastifyInstance) {
    app.post('/usuarios', UsuarioController.criar)
}
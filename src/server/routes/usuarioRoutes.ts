import { FastifyInstance } from 'fastify'
import { UsuarioController } from '../controllers/usuario'
import { verificarToken } from '../middleware/verificar-token'
import { validarAdmin } from '../middleware/validar-admin'
import { validarUsuario } from '../middleware/validar-usuario'


export async function usuarioRoutes(app: FastifyInstance) {
    app.post('/usuarios', {
        preHandler: [verificarToken, validarAdmin]
    },
        UsuarioController.criar)

    app.get('/usuarios', {
        preHandler: [verificarToken, validarUsuario]
    },
        UsuarioController.buscarDadosUsuario)
}
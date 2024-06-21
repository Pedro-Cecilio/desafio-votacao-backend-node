import { FastifyInstance } from 'fastify'
import { verificarToken } from '../middleware/verificar-token'
import { votoController } from '../controllers/voto'
import { validarUsuario } from '../middleware/validar-usuario'


export async function votoRoutes(app: FastifyInstance) {
    app.post('/votoInterno', {
        preHandler: [verificarToken, validarUsuario]
    }, votoController.votoInterno)

    app.post('/votoExterno', votoController.votoExterno)
}
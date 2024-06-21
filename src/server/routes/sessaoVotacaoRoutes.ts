import { FastifyInstance } from 'fastify'
import { verificarToken } from '../middleware/verificar-token'
import { validarAdmin } from '../middleware/validar-admin'
import { SessaoVotacaoController } from '../controllers/sessaoVotacao'


export async function sessaoVotacaoRoutes(app: FastifyInstance) {
    app.post('/sessaoVotacao', {
        preHandler: [verificarToken, validarAdmin]
    }, SessaoVotacaoController.abrir)

}
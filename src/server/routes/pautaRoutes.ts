import { FastifyInstance } from 'fastify'
import { verificarToken } from '../middleware/verificar-token'
import { validarAdmin } from '../middleware/validar-admin'
import { PautaController } from '../controllers/pauta'
import { validarUsuario } from '../middleware/validar-usuario'


export async function pautaRoutes(app: FastifyInstance) {
    app.post('/pautas', {
        preHandler: [verificarToken, validarAdmin]
    }, PautaController.criar)
    app.get("/pautas", {
        preHandler: [verificarToken, validarAdmin]
    }, PautaController.buscarPorUsuarioId)
    app.get('/pautas/ativas', {
        preHandler: [verificarToken, validarUsuario]
    }, PautaController.buscarAtivas)

    app.get('/pautas/:id', PautaController.buscarAtivaPorId)

}
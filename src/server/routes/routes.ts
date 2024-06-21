import { FastifyInstance } from 'fastify'
import { UsuarioController } from '../controllers/usuario'
import { AutenticacaoController } from '../controllers/autenticacao'
import { verificarToken } from '../middleware/verificar-token'
import { validarAdmin } from '../middleware/validar-admin'
import { PautaController } from '../controllers/pauta'
import { SessaoVotacaoController } from '../controllers/sessaoVotacao'
import { votoController } from '../controllers/voto'
import { validarUsuario } from '../middleware/validar-usuario'


export async function routes(app: FastifyInstance) {
    app.post('/usuarios', {
        preHandler: [verificarToken, validarAdmin]
    },
        UsuarioController.criar)

    app.get('/usuarios', {
        preHandler: [verificarToken, validarUsuario]
    },
        UsuarioController.buscarDadosUsuario)

    app.post('/auth', AutenticacaoController.autenticar)

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


    app.post('/sessaoVotacao', {
        preHandler: [verificarToken, validarAdmin]
    }, SessaoVotacaoController.abrir)

    app.post('/votoInterno', {
        preHandler: [verificarToken, validarUsuario]
    }, votoController.votoInterno)

    app.post('/votoExterno', votoController.votoExterno)
}
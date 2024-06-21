import { FastifyInstance } from 'fastify'
import { autenticacaoRoutes } from './autenticacaoRoutes'
import { usuarioRoutes } from './usuarioRoutes'
import { pautaRoutes } from './pautaRoutes'
import { sessaoVotacaoRoutes } from './sessaoVotacaoRoutes'
import { votoRoutes } from './votoRoutes'


export async function routes(app: FastifyInstance) {
    autenticacaoRoutes(app)
    usuarioRoutes(app)
    pautaRoutes(app)
    sessaoVotacaoRoutes(app)
    votoRoutes(app)
}
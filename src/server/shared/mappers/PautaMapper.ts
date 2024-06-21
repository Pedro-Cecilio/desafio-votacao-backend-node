import { plainToClass } from "class-transformer"
import { RespostaPautaDto } from "../dto/pauta/RespostaPautaDto"
import { UsuarioRespostaDto } from "../dto/usuario/UsuarioRespostaDto"
import { PautaCompleta } from "../interface/pauta/PautaCompleta"
import { sessaoVotacaoMapper } from "./SessaoVotacaoMapper"

const listaPautaCompletaToListaRespostaPautaDto = (pautas: PautaCompleta[]): RespostaPautaDto[] => {
    return pautas.map(pauta => {
        const usuarioRepostaDto: UsuarioRespostaDto = plainToClass(UsuarioRespostaDto, pauta.usuario)
        const respostaSessaoVotacao = sessaoVotacaoMapper.sessaoVotacaoCompletaToSessaoVotacaoRespostaDto(pauta.sessaoVotacao)
        return new RespostaPautaDto(pauta.id, pauta.assunto, pauta.categoria, usuarioRepostaDto, respostaSessaoVotacao)
    })
}

export const pautaMapper = {
    listaPautaCompletaToListaRespostaPautaDto
}
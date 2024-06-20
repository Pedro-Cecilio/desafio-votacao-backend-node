import { Usuario } from "@prisma/client";
import { InserirVotoInternoDto } from "../../dto/voto/InserirVotoInternoDto";
import { classValidatorValidacoes } from "../../validacoes/classValidator/classValidatorValidacoes";
import { votoRepository } from "../../../repositories/voto";
import { usuarioService } from "../usuario";
import { votoValidacoes } from "../../validacoes/voto/votoValidacoes";
import { sessaoVotacaoService } from "../sessaoVotacao";
import { SessaoVotacaoCompleta } from "../../interface/sessaoVotacao/SessaoVotacaoCompleta";
import { VotoCompleto } from "../../interface/voto/VotoCompleto";
import { VotoRespostaDto } from "../../dto/voto/VotoRespostaDto";

export const votoInterno = async (dados: InserirVotoInternoDto, usuarioId: number): Promise<VotoRespostaDto>=> {
    await classValidatorValidacoes.validarDto(dados)
    const usuario: Usuario = await usuarioService.buscarPorId(usuarioId)
    const sessaoVotacao : SessaoVotacaoCompleta = await sessaoVotacaoService.buscarPorPautaIdEAtiva(dados.pautaId)
    votoValidacoes.validarSeUsuarioPodeVotarInternamente(usuario, sessaoVotacao)
    const voto: VotoCompleto = await votoRepository.votar(usuario.cpf, dados.tipoDeVoto, sessaoVotacao, usuario.id)
    return new VotoRespostaDto(sessaoVotacao.id, sessaoVotacao.pautaId, voto.SessaoVotacao.votos, sessaoVotacao.dataAbertura, sessaoVotacao.dataFechamento)
}
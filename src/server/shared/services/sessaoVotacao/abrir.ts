import { AbrirSessaoDto } from "../../dto/sessaoVotacao/AbrirVotacaoDto";
import { pautaService } from "../pauta";
import { sessaoVotacaoValidacoes } from "../../validacoes/sessaoVotacao/sessaoVotacaoValidacoes";
import { obterDataAtual } from "../../utils/utils";
import { sessaoVotacaoRepository } from "../../../repositories/sessaoVotacao";
import { PautaCompleta } from "../../interface/pauta/PautaCompleta";
import { SessaoVotacaoCompleta } from "../../interface/sessaoVotacao/SessaoVotacaoCompleta";
import { classValidatorValidacoes } from "../../validacoes/classValidator/classValidatorValidacoes";
import { sessaoVotacaoMapper } from "../../mappers/SessaoVotacaoMapper";
import { SessaoVotacaoRespostaDto } from "../../dto/sessaoVotacao/SessaoVotacaoRespostaDto";

export const abrir = async (dados: AbrirSessaoDto, usuarioId: number): Promise<SessaoVotacaoRespostaDto> =>{
    await classValidatorValidacoes.validarDto(dados);
    
    const pauta: PautaCompleta = await pautaService.buscarPorIdEUsuarioId(dados.pautaId, usuarioId)
    sessaoVotacaoValidacoes.validarSePautaNaoPossuiSessaoAberta(pauta)

    const dataAtual = obterDataAtual()
    const dataAbertura: Date = dataAtual.clone().toDate();
    const dataFechamento: Date = dataAtual.clone().add(dados.minutos, "minute").toDate();

    const sessaoVotacao: SessaoVotacaoCompleta = await sessaoVotacaoRepository.abrir(pauta, dataAbertura, dataFechamento);
    return sessaoVotacaoMapper.sessaoVotacaoCompletaToSessaoVotacaoRespostaDto(sessaoVotacao)!
}       
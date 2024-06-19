import { AbrirSessaoDto } from "../../dto/sessaoVotacao/AbrirVotacaoDto";
import { pautaService } from "../pauta";
import { sessaoVotacaoValidacoes } from "../../validacoes/sessaoVotacao/sessaoVotacaoValidacoes";
import { obterDataAtual } from "../../utils/utils";
import { sessaoVotacaoRepository } from "../../../repositories/sessaoVotacao";
import { PautaCompleta } from "../../interface/pauta/PautaCompleta";
import { SessaoVotacaoCompleta } from "../../interface/sessaoVotacao/SessaoVotacaoCompleta";
import { classValidatorValidacoes } from "../../validacoes/classValidator/classValidatorValidacoes";

export const abrir = async (dados: AbrirSessaoDto, usuarioId: number): Promise<SessaoVotacaoCompleta> =>{
    await classValidatorValidacoes.validarDto(dados);
    
    const pauta: PautaCompleta = await pautaService.buscarPorIdEUsuarioId(dados.pautaId, usuarioId)
    sessaoVotacaoValidacoes.validarSePautaNaoPossuiSessaoAberta(pauta)

    const dataAtual = obterDataAtual()
    const dataAbertura: Date = dataAtual.clone().toDate();
    const dataFechamento: Date = dataAtual.clone().add(dados.minutos, "minute").toDate();

    return await sessaoVotacaoRepository.abrir(pauta, dataAbertura, dataFechamento);
}       
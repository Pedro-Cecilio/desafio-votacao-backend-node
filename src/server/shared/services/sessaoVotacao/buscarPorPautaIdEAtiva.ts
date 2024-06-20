import { sessaoVotacaoRepository } from "../../../repositories/sessaoVotacao";
import { NaoEncontradoErro } from "../../exececoes/erros";
import { SessaoVotacaoCompleta } from "../../interface/sessaoVotacao/SessaoVotacaoCompleta";

export const buscarPorPautaIdEAtiva = async (pautaId: number): Promise<SessaoVotacaoCompleta>=> {
    try {
        return await sessaoVotacaoRepository.buscarPorPautaIdEAtiva(pautaId)
    } catch (error) {
        throw new NaoEncontradoErro("Pauta informada não possui sessão de votação ativa.")
    }
}
import { SessaoVotacaoRespostaDto } from "../dto/sessaoVotacao/SessaoVotacaoRespostaDto";
import { SessaoVotacaoCompleta } from "../interface/sessaoVotacao/SessaoVotacaoCompleta";

const sessaoVotacaoCompletaToSessaoVotacaoRespostaDto = (dados: SessaoVotacaoCompleta | null): SessaoVotacaoRespostaDto | null => {
    if (!dados) {
        return null;
    }
    return new SessaoVotacaoRespostaDto(dados)
}


export const sessaoVotacaoMapper = {
    sessaoVotacaoCompletaToSessaoVotacaoRespostaDto
}
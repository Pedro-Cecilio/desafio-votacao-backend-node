import { ValidacaoErro } from "../../exececoes/erros";
import { PautaCompleta } from "../../interface/pauta/PautaCompleta";

const validarSePautaNaoPossuiSessaoAberta = (pauta: PautaCompleta) => {
    if (pauta.sessaoVotacao) {
        throw new ValidacaoErro("Pauta já possui uma votação aberta")
    }
}


export const sessaoVotacaoValidacoes = {
    validarSePautaNaoPossuiSessaoAberta
}
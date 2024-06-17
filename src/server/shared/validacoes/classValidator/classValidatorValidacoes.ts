import { validate } from "class-validator";
import { ValidacaoErro } from "../../exececoes/erros";
import { obterMensagemErroClassValidator } from "../../exececoes/classValidator/classValidator";

const validarDto = async (classe: object)=>{
    const erros = await validate(classe);
    if (erros.length > 0) {
        const mensagem = obterMensagemErroClassValidator(erros)
        throw new ValidacaoErro(mensagem)
    }
}

export const classValidatorValidacoes = {
    validarDto
}
import { ValidationError } from "class-validator";

export const obterMensagemErroClassValidator = (erros: ValidationError[]): string => {
    const primeiraPropiedadeComErro = erros[0];
    let primeiroIndentificadorDeErro: string;
    let primeiraMensagemDeErro: string;
    
    if (primeiraPropiedadeComErro.constraints != null) {
        primeiroIndentificadorDeErro = Object.keys(primeiraPropiedadeComErro.constraints)[0]
        primeiraMensagemDeErro = primeiraPropiedadeComErro.constraints[primeiroIndentificadorDeErro]
        return primeiraMensagemDeErro;
    }

    const primeiroErroDtoFilho: ValidationError = primeiraPropiedadeComErro.children![0]
    primeiroIndentificadorDeErro = Object.keys(primeiroErroDtoFilho.constraints!)[0]
    primeiraMensagemDeErro = primeiroErroDtoFilho.constraints![primeiroIndentificadorDeErro]
    return primeiraMensagemDeErro;
} 
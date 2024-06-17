import { usuarioRepository } from "../../../repositories/usuario";
import { ValidacaoErro } from "../../exececoes/erros"

// const validarFormatoNome = (nome: string): string => {
//     if (nome.length < 3 || nome.length > 20) throw new ValidacaoErro("Nome deve conter entre 3 e 20 caracteres.")
//     return nome;
// }
// const validarFormatoSobrenome = (sobrenome: string): string => {
//     if (sobrenome.length < 2 || sobrenome.length > 20) throw new ValidacaoErro("Sobrenome deve conter entre 2 e 20 caracteres.")
//     return sobrenome;
// }

// const validarFormatoCpf = (cpf: string): string => {
//     const REGEX_CPF = /\d{11}/
//     if (!REGEX_CPF.test(cpf)) throw new ValidacaoErro("Cpf deve conter 11 caracteres numéricos.")
//     return cpf;
// }

const validarSePodeCadastrarCpf = async (cpf: string) => {
    const usuario = await usuarioRepository.buscarPorCpf(cpf);
    if(usuario) throw new ValidacaoErro("Cpf já cadastrado.")
}

export const usuarioValidacoes = {
    validarSePodeCadastrarCpf
}
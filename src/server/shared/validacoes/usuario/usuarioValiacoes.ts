import { usuarioRepository } from "../../../repositories/usuario";
import { ValidacaoErro } from "../../exececoes/erros"

const validarSePodeCadastrarCpf = async (cpf: string) => {
    const usuario = await usuarioRepository.buscarPorCpf(cpf);
    if(usuario) throw new ValidacaoErro("Cpf já cadastrado.")
}

export const usuarioValidacoes = {
    validarSePodeCadastrarCpf
}
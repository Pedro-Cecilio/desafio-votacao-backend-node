import { ValidacaoErro } from "../../../../src/server/shared/exececoes/erros";
import {usuarioValidacoes} from "../../../../src/server/shared/validacoes/usuario/usuarioValiacoes"

const validarSePodeCadastrarCpfSucessoMock = ()=>{
    jest.spyOn(usuarioValidacoes, "validarSePodeCadastrarCpf").mockResolvedValue();
}

const validarSePodeCadastrarCpfFalhaMock = ()=>{
    jest.spyOn(usuarioValidacoes, "validarSePodeCadastrarCpf").mockRejectedValue(()=>{
        throw new ValidacaoErro("Cpf já cadastrado.")
    });
}


export const validacoesUsuarioMock = {
    validarSePodeCadastrarCpfSucessoMock,
    validarSePodeCadastrarCpfFalhaMock,
}

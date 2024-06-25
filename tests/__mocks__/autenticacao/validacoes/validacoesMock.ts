import { ValidacaoErro } from "../../../../src/server/shared/exececoes/erros"
import { autenticacaoValidacoes } from "../../../../src/server/shared/validacoes/autenticacao/autenticacaoValidacoes"

const validarSePodeCadastrarEmailSucessoMock = () => {
    jest.spyOn(autenticacaoValidacoes, "validarSePodeCadastrarEmail").mockResolvedValue()
}
const validarSePodeCadastrarEmailFalhaMock = () => {
    jest.spyOn(autenticacaoValidacoes, "validarSePodeCadastrarEmail").mockRejectedValue(() => { throw new ValidacaoErro("Email já cadastrado.") })
}
const validarSenhaSucessoMock = ()=>{
    jest.spyOn(autenticacaoValidacoes, "validarSenha").mockResolvedValue()
}
const validarSenhaFalhaMock = ()=>{
    jest.spyOn(autenticacaoValidacoes, "validarSenha").mockRejectedValue(()=>{
        throw new ValidacaoErro("Dados de login inválidos.")
    })
}
export const validacoesAutenticacaoMock = {
    validarSePodeCadastrarEmailSucessoMock,
    validarSePodeCadastrarEmailFalhaMock,
    validarSenhaSucessoMock,
    validarSenhaFalhaMock,
}
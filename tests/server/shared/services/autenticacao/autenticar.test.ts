import { AutenticacaoCompleta } from "../../../../../src/server/shared/interface/autenticacao/AutenticacaoCompleta"
import { autenticacaoRepositoryMock } from "../../../../__mocks__/autenticacao/repository/repositoryMock"
import { validacoesAutenticacaoMock } from "../../../../__mocks__/autenticacao/validacoes/validacoesMock"
import { tokenServiceMock } from "../../../../__mocks__/token/services/servicesMock"
import { AutenticacaoCompletaFixture } from "../../../../fixture/autenticacao/AutenticacaoCompletaFixture"
import { autenticacaoService } from "../../../../../src/server/shared/services/autenticacao"
import { AutenticacaoDto } from "../../../../../src/server/shared/dto/autenticacao/AutenticacaoDto"
import { AutenticacaoDtoFixture } from "../../../../fixture/autenticacao/AutenticacaoDtoFIxture"

describe("Service de Autenticar - autenticar", () => {
    it("Deve ser possível se autenticar com sucesso", async () => {
        const autenticacaoCompleta: AutenticacaoCompleta = AutenticacaoCompletaFixture.criar()
        const dto: AutenticacaoDto = AutenticacaoDtoFixture.dadosValidos()
        autenticacaoRepositoryMock.buscarPorEmailSucessoMock(autenticacaoCompleta)
        validacoesAutenticacaoMock.validarSenhaSucessoMock()
        tokenServiceMock.criarMock()

        const resposta = await autenticacaoService.autenticar(dto)


        expect(resposta.token).toEqual("tokenValido")
        expect(resposta.admin).toEqual(autenticacaoCompleta.usuario.admin)
    })

    it.each([
        [AutenticacaoDtoFixture.emailInvalido(), /^Email com formato inválido.$/],
        [AutenticacaoDtoFixture.semEmail(), /^Email deve ser informado.$/],
        [AutenticacaoDtoFixture.senhaPequena(), /^Senha deve conter 8 caracteres no mínimo.$/],
        [AutenticacaoDtoFixture.semSenha(), /^Senha deve ser informada.$/],
    ])("Deve falhar ao tentar autenticar passando dto inválido", async (dto: AutenticacaoDto, mensagemDeErro: RegExp)=>{
        await expect(autenticacaoService.autenticar(dto)).rejects.toThrow(mensagemDeErro)
    })

    it("Deve falhar ao tentar se autenticar com email não cadastrado", async ()=>{
        const dto: AutenticacaoDto = AutenticacaoDtoFixture.dadosValidos()
        autenticacaoRepositoryMock.buscarPorEmailFalhaMock()
        await expect(autenticacaoService.autenticar(dto)).rejects.toThrow(/^Dados de login inválidos.$/)

    })
    it("Deve falhar ao tentar se autenticar com senha incorreta", async ()=>{
        const dto: AutenticacaoDto = AutenticacaoDtoFixture.dadosValidos()
        autenticacaoRepositoryMock.buscarPorEmailSucessoMock(AutenticacaoCompletaFixture.criar())
        validacoesAutenticacaoMock.validarSenhaFalhaMock()
        await expect(autenticacaoService.autenticar(dto)).rejects.toThrow(/^Dados de login inválidos.$/)
    })
})
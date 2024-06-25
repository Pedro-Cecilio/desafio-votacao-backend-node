import { pautaRepositoryMock } from "../../../../__mocks__/pauta/repository/repositoryMock"
import { pautaService } from "../../../../../src/server/shared/services/pauta"
import { CriarPautaDtoFixture } from "../../../../fixture/pauta/CriarPautaDtoFixture"
import { PautaCompletaFixture } from "../../../../fixture/pauta/PautaCompletaFixture"
import { CriarPautaDto } from "../../../../../src/server/shared/dto/pauta/CriarPautaDto"


describe("Pauta service - criar", () => {
    it("Deve ser possível criar uma pauta corretamente", async () => {
        const respostaRepositoryMock = PautaCompletaFixture.criarSessaoNula()
        const dados = CriarPautaDtoFixture.dadosValidos()
        pautaRepositoryMock.criarMock(respostaRepositoryMock)

        const resposta = await pautaService.criar(dados, 1)

        expect(resposta.assunto).toBe(respostaRepositoryMock.assunto)
        expect(resposta.categoria).toBe(respostaRepositoryMock.categoria)
        expect(resposta.usuario.id).toBe(respostaRepositoryMock.usuarioId)
    })

    it.each([
        [CriarPautaDtoFixture.semAssunto(), /^Assunto deve ser informado.$/],
        [CriarPautaDtoFixture.semCategoria(), /^Categoria deve ser informada.$/],
        [CriarPautaDtoFixture.categoriaInvalida(), /^Categoria inválida.$/],
    ])("Deve falhar ao tentar criar pauta com dto inválido", async (dados: CriarPautaDto, mensagemErro: RegExp) => {
        await expect(pautaService.criar(dados, 1)).rejects.toThrow(mensagemErro)
    })
})
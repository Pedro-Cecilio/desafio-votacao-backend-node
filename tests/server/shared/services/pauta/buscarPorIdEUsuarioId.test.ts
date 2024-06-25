import { pautaService } from "../../../../../src/server/shared/services/pauta"
import { pautaRepositoryMock } from "../../../../__mocks__/pauta/repository/repositoryMock"
import { PautaCompletaFixture } from "../../../../fixture/pauta/PautaCompletaFixture"

describe("Pauta service - buscarPorIdEUsuarioId", () => {
    it("Deve ser possível buscar pauta por Id E UsuarioId", async () => {
        const respostaRepostiryMock = PautaCompletaFixture.criarSessaoNula()
        pautaRepositoryMock.buscarPorIdEUsuarioIdSucessoMock(respostaRepostiryMock)

        await expect(pautaService.buscarPorIdEUsuarioId(1, 1)).resolves.not.toThrow()
    })

    it("Deve ser falhar ao buscar pauta por Id E UsuarioId não existetne", async () => {
        pautaRepositoryMock.buscarPorIdEUsuarioIdFalhaMock()

        await expect(pautaService.buscarPorIdEUsuarioId(1, 1)).rejects.toThrow(/^Pauta não encontrada.$/)
    })


})
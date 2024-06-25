import { PautaCompleta } from "../../../../../src/server/shared/interface/pauta/PautaCompleta"
import { pautaService } from "../../../../../src/server/shared/services/pauta"
import { pautaRepositoryMock } from "../../../../__mocks__/pauta/repository/repositoryMock"
import { PautaCompletaFixture } from "../../../../fixture/pauta/PautaCompletaFixture"

describe("Pauta service - buscarPorUsuarioId", () => {
    it("Deve ser possível buscar todas pautas por usuarioId", async () => {
       const repostaRepositoryMock: PautaCompleta[] = PautaCompletaFixture.listaPautaCompleta()
       pautaRepositoryMock.buscarPorUsuarioIdMock(repostaRepositoryMock)

       const resposta = await pautaService.buscarPorUsuarioId(1)

       expect(resposta.length).toBe(repostaRepositoryMock.length)
    })

  
})
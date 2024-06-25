import { PautaCompleta } from "../../../../../src/server/shared/interface/pauta/PautaCompleta"
import { pautaService } from "../../../../../src/server/shared/services/pauta"
import { pautaRepositoryMock } from "../../../../__mocks__/pauta/repository/repositoryMock"
import { PautaCompletaFixture } from "../../../../fixture/pauta/PautaCompletaFixture"

describe("Pauta service - buscarAtivas", () => {
    it("Deve ser possível buscar todas pautas ativas", async () => {
        const dados: PautaCompleta[] = PautaCompletaFixture.listaPautaCompleta()
        pautaRepositoryMock.buscarAtivasMock(dados)

        const resposta =  await pautaService.buscarAtivas();

        expect(resposta.length).toBe(dados.length)
    })

})
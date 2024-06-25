import { PautaCompleta } from "../../../../../src/server/shared/interface/pauta/PautaCompleta"
import { pautaService } from "../../../../../src/server/shared/services/pauta"
import { pautaRepositoryMock } from "../../../../__mocks__/pauta/repository/repositoryMock"
import { PautaCompletaFixture } from "../../../../fixture/pauta/PautaCompletaFixture"

describe("Pauta service - buscarAtivaPorId", () => {
    it("Deve ser possível buscar pauta ativa por Id", async () => {
        const dados: PautaCompleta = PautaCompletaFixture.criar()
        pautaRepositoryMock.buscarAtivaPorIdSucessoMock(dados)

        await expect(pautaService.buscarAtivaPorId("1")).resolves.not.toThrow()
    })

    it("Deve falhar ao buscar pauta ativa por id, ao passar id que não possa ser convertido para number", async ()=>{
        await expect(pautaService.buscarAtivaPorId("abd123")).rejects.toThrow(/^Pauta não encontrada.$/)
    })

    it("Deve falhar ao não encontrar pauta ativa por id", async ()=>{

        pautaRepositoryMock.buscarAtivaPorIdFalhaMock()
        await expect(pautaService.buscarAtivaPorId("1")).rejects.toThrow(/^Pauta não encontrada.$/)
    })
    
})
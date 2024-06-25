import { autenticacaoService } from "../../../../../src/server/shared/services/autenticacao"
import { autenticacaoServiceMock } from "../../../../__mocks__/autenticacao/services/serviceMock"
import { AutenticacaoFixture } from "../../../../fixture/autenticacao/AutenticacaoFixture"

describe("Autenticacao Service - encriptarSenha", ()=>{
    it("Deve ser possível encriptar senha", async ()=>{
        const senha: string = AutenticacaoFixture.SENHA_ALEATORIA
        const senhaEncriptada: string = "senhaEncriptadaMock"
        autenticacaoServiceMock.bcryptHashMock(senhaEncriptada)
        await expect(autenticacaoService.encriptarSenha(senha)).resolves.toBe(senhaEncriptada)
    })
})
import { Autenticacao } from "@prisma/client"
import { tokenService } from "../../../../../src/server/shared/services/token"
import { tokenServiceMock } from "../../../../__mocks__/token/services/servicesMock"
import { AutenticacaoFixture } from "../../../../fixture/autenticacao/AutenticacaoFixture"

describe("Token service - criar", ()=>{
    it("Deve criar um token corretamente", async () => {
        const autenticacao: Autenticacao = AutenticacaoFixture.criar()
        const token: string = "tokenValido";
        tokenServiceMock.jwtSecretMock()
        tokenServiceMock.jwtSignMock(token)

        expect(tokenService.criar(autenticacao)).toBe(token)
    })
})
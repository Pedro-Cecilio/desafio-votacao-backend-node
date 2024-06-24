import { autenticacaoService } from "../../../../src/server/shared/services/autenticacao"

export const encriptarSenha = (mock: jest.Mock) => {
    jest.spyOn(autenticacaoService, "encriptarSenha").mockImplementation(mock)
}

export const autenticacaoServiceMock = {
    encriptarSenha
}
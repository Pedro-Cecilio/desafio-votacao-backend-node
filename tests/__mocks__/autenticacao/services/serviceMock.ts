import { autenticacaoService } from "../../../../src/server/shared/services/autenticacao"
import bcrypt from "bcrypt";

const encriptarSenha = (mock: jest.Mock) => {
    jest.spyOn(autenticacaoService, "encriptarSenha").mockImplementation(mock)
}
const bcryptHashMock = (resposta: string) => {
    jest.spyOn(bcrypt, "hash").mockImplementation(jest.fn().mockResolvedValue(resposta))
}
export const autenticacaoServiceMock = {
    encriptarSenha,
    bcryptHashMock
}
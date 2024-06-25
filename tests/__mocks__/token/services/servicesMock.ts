import { tokenService } from "../../../../src/server/shared/services/token"

const criarMock = () => {
    jest.spyOn(tokenService, "criar").mockReturnValue("tokenValido")
}

export const tokenServiceMock = {
    criarMock
}
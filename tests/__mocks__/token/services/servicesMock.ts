import { tokenService } from "../../../../src/server/shared/services/token"
import jwt from "jsonwebtoken"

const criarMock = () => {
    jest.spyOn(tokenService, "criar").mockReturnValue("tokenValido")
}

const jwtSecretMock = ()=>{
    process.env = {...process.env, JWT_SECRET: "jwtSenha"}
}
const jwtSignMock = (token: string)=>{
    jest.spyOn(jwt, "sign").mockImplementation(jest.fn().mockReturnValue(token))
}
export const tokenServiceMock = {
    criarMock,
    jwtSecretMock, 
    jwtSignMock
}
import { plainToClass } from "class-transformer";
import { AutenticacaoDto } from "../../../src/server/shared/dto/autenticacao/AutenticacaoDto";
import { fakerPT_BR } from "@faker-js/faker"

export class AutenticacaoDtoFixture {
    public static dadosValidos(): AutenticacaoDto {
        const autenticacaoDto = {
            email: fakerPT_BR.internet.email(),
            senha: fakerPT_BR.internet.password({
                length: 8
            })
        }
        return plainToClass(AutenticacaoDto, autenticacaoDto)
    }
    public static semEmail(): AutenticacaoDto {
        const autenticacaoDto = {
            senha: fakerPT_BR.internet.password({
                length: 8
            })
        }
        return plainToClass(AutenticacaoDto, autenticacaoDto)
    }
    public static emailInvalido(): AutenticacaoDto {
        const autenticacaoDto = {
            email: "emailInvalido.com",
            senha: fakerPT_BR.internet.password({
                length: 8
            })
        }
        return plainToClass(AutenticacaoDto, autenticacaoDto)
    }
    public static semSenha(): AutenticacaoDto {
        const autenticacaoDto = {
            email: fakerPT_BR.internet.email(),
        }
        return plainToClass(AutenticacaoDto, autenticacaoDto)
    }
    public static senhaPequena(): AutenticacaoDto {
        const autenticacaoDto = {
            email: fakerPT_BR.internet.email(),
            senha: "1234567"
        }
        return plainToClass(AutenticacaoDto, autenticacaoDto)
    }
}
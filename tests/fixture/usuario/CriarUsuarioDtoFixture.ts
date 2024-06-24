import { plainToClass } from "class-transformer"
import { CriarUsuarioDto } from "../../../src/server/shared/dto/usuario/CriarUsuarioDto"
import { AutenticacaoDtoFixture } from "../autenticacao/AutenticacaoDtoFIxture"
import { fakerPT_BR } from "@faker-js/faker"
import * as cpf from "@fnando/cpf"

export class CriarUsuarioDtoFixture {
    public static dadosValidos(): CriarUsuarioDto {
        const criarUsuarioDto = {
            autenticacaoDto: AutenticacaoDtoFixture.dadosValidos(),
            nome: fakerPT_BR.person.firstName(),
            sobrenome: fakerPT_BR.person.lastName(),
            cpf: cpf.generate(),
            admin: fakerPT_BR.datatype.boolean()
        }
        return plainToClass(CriarUsuarioDto, criarUsuarioDto)
    }
    public static semNome(): CriarUsuarioDto {
        const criarUsuarioDto = {
            autenticacaoDto: AutenticacaoDtoFixture.dadosValidos(),
            sobrenome: fakerPT_BR.person.lastName(),
            cpf: cpf.generate(),
            admin: fakerPT_BR.datatype.boolean()
        }
        return plainToClass(CriarUsuarioDto, criarUsuarioDto)
    }
    public static nomePequeno(): CriarUsuarioDto {
        const criarUsuarioDto = {
            autenticacaoDto: AutenticacaoDtoFixture.dadosValidos(),
            nome: "Pe",
            sobrenome: fakerPT_BR.person.lastName(),
            cpf: cpf.generate(),
            admin: fakerPT_BR.datatype.boolean()
        }
        return plainToClass(CriarUsuarioDto, criarUsuarioDto)
    }
    public static nomeGrande(): CriarUsuarioDto {
        const criarUsuarioDto = {
            autenticacaoDto: AutenticacaoDtoFixture.dadosValidos(),
            nome: "ParalelepipedoDaSilva",
            sobrenome: fakerPT_BR.person.lastName(),
            cpf: cpf.generate(),
            admin: fakerPT_BR.datatype.boolean()
        }
        return plainToClass(CriarUsuarioDto, criarUsuarioDto)
    }
    public static semSobrenome(): CriarUsuarioDto {
        const criarUsuarioDto = {
            autenticacaoDto: AutenticacaoDtoFixture.dadosValidos(),
            nome: fakerPT_BR.person.firstName(),
            cpf: cpf.generate(),
            admin: fakerPT_BR.datatype.boolean()
        }
        return plainToClass(CriarUsuarioDto, criarUsuarioDto)
    }
    public static sobrenomePequeno(): CriarUsuarioDto {
        const criarUsuarioDto = {
            autenticacaoDto: AutenticacaoDtoFixture.dadosValidos(),
            nome: fakerPT_BR.person.firstName(),
            sobrenome: "C",
            cpf: cpf.generate(),
            admin: fakerPT_BR.datatype.boolean()
        }
        return plainToClass(CriarUsuarioDto, criarUsuarioDto)
    }
    public static sobrenomeGrande(): CriarUsuarioDto {
        const criarUsuarioDto = {
            autenticacaoDto: AutenticacaoDtoFixture.dadosValidos(),
            nome: fakerPT_BR.person.firstName(),
            sobrenome: "ParalelepipedoDaSilva",
            cpf: cpf.generate(),
            admin: fakerPT_BR.datatype.boolean()
        }
        return plainToClass(CriarUsuarioDto, criarUsuarioDto)
    }

    public static semCpf(): CriarUsuarioDto {
        const criarUsuarioDto = {
            autenticacaoDto: AutenticacaoDtoFixture.dadosValidos(),
            nome: fakerPT_BR.person.firstName(),
            sobrenome: fakerPT_BR.person.lastName(),
            admin: fakerPT_BR.datatype.boolean()
        }
        return plainToClass(CriarUsuarioDto, criarUsuarioDto)
    }

    public static cpfInvalido(): CriarUsuarioDto {
        const criarUsuarioDto = {
            autenticacaoDto: AutenticacaoDtoFixture.dadosValidos(),
            nome: fakerPT_BR.person.firstName(),
            sobrenome: fakerPT_BR.person.lastName(),
            cpf: "1234567891",
            admin: fakerPT_BR.datatype.boolean()
        }
        return plainToClass(CriarUsuarioDto, criarUsuarioDto)
    }

    public static semAdmin(): CriarUsuarioDto {
        const criarUsuarioDto = {
            autenticacaoDto: AutenticacaoDtoFixture.dadosValidos(),
            nome: fakerPT_BR.person.firstName(),
            sobrenome: fakerPT_BR.person.lastName(),
            cpf: cpf.generate()
        }
        return plainToClass(CriarUsuarioDto, criarUsuarioDto)
    }
    
    public static semEmail(): CriarUsuarioDto {
        const criarUsuarioDto = {
            autenticacaoDto: AutenticacaoDtoFixture.semEmail(),
            nome: fakerPT_BR.person.firstName(),
            sobrenome: fakerPT_BR.person.lastName(),
            cpf: cpf.generate(),
            admin: fakerPT_BR.datatype.boolean()
        }
        return plainToClass(CriarUsuarioDto, criarUsuarioDto)
    }
    public static emailInvalido(): CriarUsuarioDto {
        const criarUsuarioDto = {
            autenticacaoDto: AutenticacaoDtoFixture.emailInvalido(),
            nome: fakerPT_BR.person.firstName(),
            sobrenome: fakerPT_BR.person.lastName(),
            cpf: cpf.generate(),
            admin: fakerPT_BR.datatype.boolean()
        }
        return plainToClass(CriarUsuarioDto, criarUsuarioDto)
    }

    public static semSenha(): CriarUsuarioDto {
        const criarUsuarioDto = {
            autenticacaoDto: AutenticacaoDtoFixture.semSenha(),
            nome: fakerPT_BR.person.firstName(),
            sobrenome: fakerPT_BR.person.lastName(),
            cpf: cpf.generate(),
            admin: fakerPT_BR.datatype.boolean()
        }
        return plainToClass(CriarUsuarioDto, criarUsuarioDto)
    }

    public static senhaPequena(): CriarUsuarioDto {
        const criarUsuarioDto = {
            autenticacaoDto: AutenticacaoDtoFixture.senhaPequena(),
            nome: fakerPT_BR.person.firstName(),
            sobrenome: fakerPT_BR.person.lastName(),
            cpf: cpf.generate(),
            admin: fakerPT_BR.datatype.boolean()
        }
        return plainToClass(CriarUsuarioDto, criarUsuarioDto)
    }
}
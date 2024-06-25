import { Usuario } from "@prisma/client";
import { CriarUsuarioDto } from "../../../src/server/shared/dto/usuario/CriarUsuarioDto";
import { fakerPT_BR } from "@faker-js/faker";
import * as cpf from "@fnando/cpf"
export class UsuarioFixture{
    public static CPF_ALEATORIO: string = cpf.generate();
    public static criarComDto(dados: CriarUsuarioDto): Usuario{
        return {
            id: 1,
            nome: dados.nome,
            sobrenome: dados.sobrenome,
            cpf: dados.cpf,
            admin: dados.admin,
        }
    }
    public static criarNovo(): Usuario{
        return {
            id: 1,
            nome: fakerPT_BR.person.firstName(),
            sobrenome: fakerPT_BR.person.lastName(),
            cpf: cpf.generate(),
            admin: fakerPT_BR.datatype.boolean(),
        }
    }
}
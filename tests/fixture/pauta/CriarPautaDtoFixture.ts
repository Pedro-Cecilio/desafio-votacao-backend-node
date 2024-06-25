import { fakerPT_BR } from "@faker-js/faker"
import { CriarPautaDto } from "../../../src/server/shared/dto/pauta/CriarPautaDto"
import { Categoria } from "@prisma/client"
import { plainToClass } from "class-transformer"

export class CriarPautaDtoFixture{
    public static dadosValidos(): CriarPautaDto{
        const criarPautaDto = {
            assunto: "Você está migrando de linguagem?",
            categoria: fakerPT_BR.helpers.enumValue(Categoria),
        }
        return plainToClass(CriarPautaDto, criarPautaDto)
    }
    
    public static semAssunto(): CriarPautaDto{
        const criarPautaDto = {
            categoria: fakerPT_BR.helpers.enumValue(Categoria),
        }
        return plainToClass(CriarPautaDto, criarPautaDto)
    }

    public static semCategoria(): CriarPautaDto{
        const criarPautaDto = {
            assunto: "Você está migrando de linguagem?",
        }
        return plainToClass(CriarPautaDto, criarPautaDto)
    }

    public static categoriaInvalida(): CriarPautaDto{
        const criarPautaDto = {
            assunto: "Você está migrando de linguagem?",
            categoria: "CATEGORIA INVALIDA"
        }
        return plainToClass(CriarPautaDto, criarPautaDto)
    }
}
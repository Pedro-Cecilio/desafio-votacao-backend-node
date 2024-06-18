import { Categoria } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CriarPautaDto {
    @IsString({ message: "Assunto deve ser uma string." })
    @IsNotEmpty({ message: "Assunto deve ser informado." })
    assunto: string;

    @IsNotEmpty({ message: "Categoria deve ser informada." })
    @IsEnum(Categoria, {message: "Categoria inválida."})
    categoria: Categoria
}
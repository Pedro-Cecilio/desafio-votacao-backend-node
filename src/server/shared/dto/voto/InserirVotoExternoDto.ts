import { TipoDeVoto } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsNumber, IsString, Matches } from "class-validator";

export class InserirVotoExternoDto{
    @IsNumber({}, {message: "PautaId deve ser de tipo numérico."})
    @IsNotEmpty({message: "PautaId deve ser informado."})
    pautaId: number;

    @IsEnum(TipoDeVoto, {message: "Tipo de voto inválido."})
    @IsNotEmpty({message: "Tipo de voto deve ser informado."})
    tipoDeVoto: TipoDeVoto

    @Matches(/\d{11}/, { message: "CPF deve conter 11 caracteres numéricos." })
    @IsString({ message: "CPF deve ser uma string." })
    public readonly cpf: string;

    @IsString({ message: "Senha deve ser uma string." })
    public readonly senha: string
}
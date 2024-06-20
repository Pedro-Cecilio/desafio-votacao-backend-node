import { TipoDeVoto } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsNumber } from "class-validator";

export class InserirVotoInternoDto{
    @IsNumber({}, {message: "PautaId deve ser de tipo numérico."})
    @IsNotEmpty({message: "PautaId deve ser informado."})
    pautaId: number;

    @IsEnum(TipoDeVoto, {message: "Tipo de voto inválido."})
    @IsNotEmpty({message: "Tipo de voto deve ser informado."})
    tipoDeVoto: TipoDeVoto
}
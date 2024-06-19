import { IsInt, IsNotEmpty, IsNumber, IsPositive } from "class-validator"

export class AbrirSessaoDto {
    @IsPositive({message : "Minutos deve ser maior que 0."})
    @IsInt({message: "Minutos deve ser um valor inteiro."})
    @IsNotEmpty({ message: "Minutos deve ser informado." })
    minutos: number

    @IsNumber({}, {message: "PautaId deve ser um valor numérico."})
    @IsNotEmpty({message: "PautaId deve ser informada."})
    pautaId: number
}
import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class AutenticacaoDto{
    @IsEmail({}, { message: "Email com formato inválido." })
    @IsNotEmpty({message: "Email deve ser informado."})
    public readonly email: string;

    @Length(8, undefined, { message: "Senha deve conter 8 caracteres no mínimo."})
    @IsString({ message: "Senha deve ser uma string." })
    @IsNotEmpty({message: "Senha deve ser informada."})
    public readonly senha: string;
}
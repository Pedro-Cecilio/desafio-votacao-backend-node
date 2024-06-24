import { IsString, Length, IsBoolean, Matches, IsNotEmpty, ValidateNested } from 'class-validator';
import { AutenticacaoDto } from '../autenticacao/AutenticacaoDto';
import { Type } from 'class-transformer';

export class CriarUsuarioDto {
    @ValidateNested()
    @Type(() => AutenticacaoDto)
    @IsNotEmpty({ message: "AutenticacaoDto deve ser informado." })
    public readonly autenticacaoDto: AutenticacaoDto

    @Length(3, 20, { message: "Nome deve conter entre 3 e 20 caracteres." })
    @IsString({ message: "Nome deve ser uma string." })
    @IsNotEmpty({ message: "Nome deve ser informado."})
    public readonly nome: string;

    @Length(2, 20, { message: "Sobrenome deve conter entre 2 e 20 caracteres." })
    @IsString({ message: "Sobrenome deve ser uma string." })
    @IsNotEmpty({ message: "Sobrenome deve ser informado." })
    public readonly sobrenome: string;

    @Matches(/\d{11}/, { message: "CPF deve conter 11 caracteres numéricos." })
    @IsString({ message: "CPF deve ser uma string." })
    @IsNotEmpty({ message: "Cpf deve ser informado."})
    public readonly cpf: string;

    @IsBoolean({ message: "Admin deve ser um boolean." })
    @IsNotEmpty({ message: "Admin deve ser informado." })
    public readonly admin: boolean;
}

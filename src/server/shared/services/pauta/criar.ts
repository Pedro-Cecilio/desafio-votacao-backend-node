import { plainToClass } from "class-transformer";
import { pautaRepository } from "../../../repositories/pauta";
import { CriarPautaDto } from "../../dto/pauta/CriarPautaDto";
import { classValidatorValidacoes } from "../../validacoes/classValidator/classValidatorValidacoes";
import { UsuarioRespostaDto } from "../../dto/usuario/UsuarioRespostaDto";
import { RespostaPautaDto } from "../../dto/pauta/RespostaPautaDto";

export const criar = async (criarPautaDto: CriarPautaDto, usuarioId: number)=>{
    await classValidatorValidacoes.validarDto(criarPautaDto)
    const dados = await pautaRepository.criar(criarPautaDto, usuarioId)
    const usuario: UsuarioRespostaDto = plainToClass(UsuarioRespostaDto, dados.usuario)
    return new RespostaPautaDto(dados.id, dados.assunto, dados.categoria, usuario, null)
}
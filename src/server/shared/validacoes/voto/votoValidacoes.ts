import { Pauta, Usuario } from "@prisma/client";
import { SessaoVotacaoCompleta } from "../../interface/sessaoVotacao/SessaoVotacaoCompleta";
import { ValidacaoErro } from "../../exececoes/erros";
import { autenticacaoValidacoes } from "../autenticacao/autenticacaoValidacoes";


const validarSeUsuarioNaoEDonoDaPauta = (usuario: Usuario, pauta: Pauta)=>{
    if(usuario.id === pauta.usuarioId) throw new ValidacaoErro("O criador não pode votar na pauta.")
}
const validarSeUsuarioNaoVotou = (cpf: string, sessaoVotacao: SessaoVotacaoCompleta)=>{
    const resultado = sessaoVotacao.votos.find(voto => voto.cpf == cpf)
    if(resultado) throw new ValidacaoErro("Não é possível votar duas vezes na mesma pauta.")
}
const validarSeUsuarioPodeVotarInternamente = (usuario: Usuario, sessaoVotacao: SessaoVotacaoCompleta) => {
    validarSeUsuarioNaoEDonoDaPauta(usuario, sessaoVotacao.pauta)
    validarSeUsuarioNaoVotou(usuario.cpf, sessaoVotacao)
}

const validarSePodeVotarExternamente = async (usuario: Usuario | null, senha: string)=>{
    if(usuario){
        await autenticacaoValidacoes.validarAutenticacao(usuario, senha)
    }
}

export const votoValidacoes = {
    validarSeUsuarioPodeVotarInternamente, 
    validarSePodeVotarExternamente
}
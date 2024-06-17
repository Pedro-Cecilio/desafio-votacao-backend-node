import { Autenticacao } from "@prisma/client"
import { autenticacaoRepository } from "../../../repositories/autenticacao"
import { ValidacaoErro } from "../../exececoes/erros";

const validarSePodeCadastrarEmail = async (email: string)=>{
    const autenticacao: Autenticacao | null = await autenticacaoRepository.buscarPorEmail(email);
    if(autenticacao) throw new ValidacaoErro("Email já cadastrado.")
}


export const autenticacaoValidacoes = {
    validarSePodeCadastrarEmail
}
import { autenticar } from "./autenticar";
import { compararSenha } from "./compararSenha";
import { criar } from "./criar";
import { encriptarSenha } from "./encriptarSenha";

export const autenticacaoService = {
    criar,
    encriptarSenha,
    compararSenha,
    autenticar
}
import { autenticar } from "./autenticar";
import { compararSenha } from "./compararSenha";
import { encriptarSenha } from "./encriptarSenha";

export const autenticacaoService = {
    encriptarSenha,
    compararSenha,
    autenticar
}
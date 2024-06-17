import bcrypt from "bcrypt";

export const compararSenha = async (senhaEsperada: string, senhaEncriptada: string): Promise<boolean> => {
    return await bcrypt.compare(senhaEsperada, senhaEncriptada)
}
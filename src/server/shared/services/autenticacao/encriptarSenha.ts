import bcrypt from "bcrypt";

export const encriptarSenha = async (senha: string): Promise<string> =>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(senha, salt);
}
import { Autenticacao } from "@prisma/client";
import jwt from "jsonwebtoken"

export const criar = (auth: Autenticacao) => {
    const key = process.env.JWT_SECRET!;
    return jwt.sign({
        iss: "CRUD Unidade Ar",
        sub: auth.email,
        userId: auth.usuarioId
    }, key, {
        expiresIn: "2h"
    });
}
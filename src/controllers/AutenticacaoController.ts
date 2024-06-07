import { Request, Response } from "express";

export const autenticarUsuario = (req: Request, res: Response) => {
    res.status(200).send("Hello World")
}
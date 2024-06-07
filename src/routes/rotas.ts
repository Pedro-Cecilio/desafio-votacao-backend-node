import { Router } from "express"
import autenticacaoRouter from "./autenticacaoRouter";

const rotas = Router();

rotas.use("/auth", autenticacaoRouter);



export default rotas;
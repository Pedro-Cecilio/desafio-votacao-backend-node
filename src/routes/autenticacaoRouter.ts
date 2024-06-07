import { Router } from 'express';
import { autenticarUsuario } from '../controllers/AutenticacaoController';

const autenticacaoRouter: Router = Router();

autenticacaoRouter.get("/login", autenticarUsuario);


export default autenticacaoRouter;
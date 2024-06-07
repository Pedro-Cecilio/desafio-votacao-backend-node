import express from 'express';
import rotas from './routes/rotas';

const app = express();
const port: number = 3000

app.use(rotas)

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
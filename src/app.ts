import fastify from 'fastify';
import cors from '@fastify/cors'
import 'reflect-metadata';
import { routes } from './server/routes/routes';
import { registerErrorHandler } from './server/shared/exececoes/erroHandler';

export const app = fastify()

registerErrorHandler(app)
app.register(cors)

app.register(routes)


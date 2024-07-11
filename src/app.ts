import fastify from 'fastify'
import { personRoutes } from '@/http/controllers/person/routes'
// estamos inicializando o fastify
export const app = fastify()
app.register(personRoutes)

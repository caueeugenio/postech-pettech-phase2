import fastify from 'fastify'
import { personRoutes } from '@/http/controllers/person/routes'
import { userRoutes } from './http/controllers/user/routes'
import { globalErrorHandler } from './utils/global-error-handler'
import { addressRoutes } from './http/controllers/address/routes'
// estamos inicializando o fastify
export const app = fastify()
app.register(personRoutes)
app.register(userRoutes)
app.register(addressRoutes)
app.setErrorHandler(globalErrorHandler)

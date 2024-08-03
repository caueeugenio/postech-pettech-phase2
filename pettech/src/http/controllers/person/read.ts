import { PersonRepository } from '@/repositories/pg/person.repository'
import { CreatePersonUseCase } from '@/use-cases/create-person'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    cpf: z.string(),
    name: z.string(),
    birth: z.coerce.date(),
    email: z.string().email(),
  })

  const { cpf, name, birth, email } = registerBodySchema.parse(request.body)

  try {
    const personRepository = new PersonRepository()
    const createPersonUseCase = new CreatePersonUseCase(personRepository)
    await createPersonUseCase.handler({ cpf, name, birth, email })
    return reply.status(201).send('Usuário criado com sucesso!')
  } catch (error) {
    console.log(error)
    throw new Error('Internal server error')
  }
}

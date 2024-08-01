import { makeDeleteProductUseCase } from '@/use-cases/factory/make-delete-product-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function deleteProduct(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerParamSchema = z.object({
    id: z.coerce.string(),
  })
  const { id } = registerParamSchema.parse(request.params)
  const deleteProductUseCase = makeDeleteProductUseCase()
  await deleteProductUseCase.handler(id)
  return reply.status(204).send()
}
// 204 - No Content
// The server successfully processed the request, and is not returning any content.

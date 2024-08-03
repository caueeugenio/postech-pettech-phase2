import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { ProductRepository } from '@/repositories/typeorm/product.repository'

export class FindProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async handler(id: string) {
    const product = await this.productRepository.findById(id)
    if (!product) {
      throw new ResourceNotFoundError()
    }
    return product
  }
}

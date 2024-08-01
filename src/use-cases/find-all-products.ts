import { ProductRepository } from '@/repositories/typeorm/product.repository'

export class FindAllProductsUseCase {
  constructor(private productRepository: ProductRepository) {}

  async handler(page: number, limit: number) {
    return await this.productRepository.findAll(page, limit)
  }
}

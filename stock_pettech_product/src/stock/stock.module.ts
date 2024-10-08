import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Product, ProductSchema } from './schemas/product.schema'
import { ProductRepository } from 'src/stock/repositories/product.repository'
import { ProductMongooseRepository } from 'src/stock/repositories/mongoose/product-mongoose-repository '
import { StockService } from './services/stock.service'
import { StockController } from './controllers/stock.controller'
import { PrometheusService } from 'src/shared/services/prometheus.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [StockController],
  providers: [
    {
      provide: ProductRepository,
      useClass: ProductMongooseRepository,
    },
    StockService,
    PrometheusService,
  ],
})
export class StockModule {}

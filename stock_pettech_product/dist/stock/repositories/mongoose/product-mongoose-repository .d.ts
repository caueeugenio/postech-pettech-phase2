import { IProduct } from 'src/stock/schemas/models/product.interface';
import { ProductRepository } from '../product.repository';
import { Product } from 'src/stock/schemas/product.schema';
import { Model } from 'mongoose';
export declare class ProductMongooseRepository implements ProductRepository {
    private productModel;
    constructor(productModel: Model<Product>);
    getAllStock(limit: number, page: number): Promise<IProduct[]>;
    getStock(productId: string): Promise<IProduct>;
    createStock(product: IProduct): Promise<void>;
    updateStock(productId: string, stock: number): Promise<void>;
    deleteStock(productId: string): Promise<void>;
}

import { IProduct } from '../schemas/models/product.interface';
import { ProductRepository } from 'src/stock/repositories/product.repository';
export declare class StockService {
    private readonly productRepository;
    constructor(productRepository: ProductRepository);
    getAllStock(limit: number, page: number): Promise<IProduct[]>;
    getStock(productId: string): Promise<IProduct>;
    createStock(product: IProduct): Promise<void>;
    updateStock(productId: string, stock: number): Promise<void>;
    deleteStock(productId: string): Promise<void>;
}

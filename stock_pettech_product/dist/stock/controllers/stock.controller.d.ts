import { StockService } from '../services/stock.service';
import { IProduct } from '../schemas/models/product.interface';
import { z } from 'zod';
declare const createStockSchema: z.ZodObject<{
    name: z.ZodString;
    quantity: z.ZodNumber;
    relationId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name?: string;
    quantity?: number;
    relationId?: string;
}, {
    name?: string;
    quantity?: number;
    relationId?: string;
}>;
declare const updateStockSchema: z.ZodObject<{
    stock: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    stock?: number;
}, {
    stock?: number;
}>;
type CreateStock = z.infer<typeof createStockSchema>;
type UpdateStock = z.infer<typeof updateStockSchema>;
export declare class StockController {
    private readonly stockService;
    constructor(stockService: StockService);
    getAllStock(limit: number, page: number): Promise<IProduct[]>;
    getStock(productId: string): Promise<IProduct>;
    createStock({ name, quantity, relationId }: CreateStock): Promise<void>;
    updateStock(productId: string, { stock }: UpdateStock): Promise<void>;
    deleteStock(productId: string): Promise<void>;
}
export {};

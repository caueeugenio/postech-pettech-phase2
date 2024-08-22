"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockController = void 0;
const common_1 = require("@nestjs/common");
const stock_service_1 = require("../services/stock.service");
const zod_validation_pipe_1 = require("../../shared/pipe/zod-validation.pipe");
const zod_1 = require("zod");
const logging_interceptor_1 = require("../../shared/interceptors/logging.interceptor");
const swagger_1 = require("@nestjs/swagger");
const createStockSchema = zod_1.z.object({
    name: zod_1.z.string(),
    quantity: zod_1.z.coerce.number(),
    relationId: zod_1.z.string(),
});
const updateStockSchema = zod_1.z.object({
    stock: zod_1.z.coerce.number(),
});
let StockController = class StockController {
    constructor(stockService) {
        this.stockService = stockService;
    }
    async getAllStock(limit, page) {
        return this.stockService.getAllStock(limit, page);
    }
    async getStock(productId) {
        return this.stockService.getStock(productId);
    }
    async createStock({ name, quantity, relationId }) {
        return this.stockService.createStock({ name, quantity, relationId });
    }
    async updateStock(productId, { stock }) {
        return this.stockService.updateStock(productId, stock);
    }
    async deleteStock(productId) {
        return this.stockService.deleteStock(productId);
    }
};
exports.StockController = StockController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('limit')),
    __param(1, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "getAllStock", null);
__decorate([
    (0, common_1.Get)(':productId'),
    __param(0, (0, common_1.Param)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "getStock", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UsePipes)(new zod_validation_pipe_1.ZodValidationPipe(createStockSchema)),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "createStock", null);
__decorate([
    (0, common_1.Put)(':productId'),
    __param(0, (0, common_1.Param)('productId')),
    __param(1, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(updateStockSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "updateStock", null);
__decorate([
    (0, common_1.Delete)(':productId'),
    __param(0, (0, common_1.Param)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "deleteStock", null);
exports.StockController = StockController = __decorate([
    (0, swagger_1.ApiTags)('stock'),
    (0, common_1.UseInterceptors)(logging_interceptor_1.LoggingInterceptor),
    (0, common_1.Controller)('stock'),
    __metadata("design:paramtypes", [stock_service_1.StockService])
], StockController);
//# sourceMappingURL=stock.controller.js.map
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
exports.ProductMongooseRepository = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const product_schema_1 = require("../../schemas/product.schema");
const mongoose_2 = require("mongoose");
let ProductMongooseRepository = class ProductMongooseRepository {
    constructor(productModel) {
        this.productModel = productModel;
    }
    getAllStock(limit, page) {
        const offset = (page - 1) * limit;
        return this.productModel.find().skip(offset).limit(limit).exec();
    }
    getStock(productId) {
        return this.productModel.findById(productId).exec();
    }
    async createStock(product) {
        const createStock = new this.productModel(product);
        await createStock.save();
    }
    async updateStock(productId, stock) {
        await this.productModel
            .updateOne({ _id: productId }, { quantity: stock })
            .exec();
    }
    async deleteStock(productId) {
        await this.productModel.deleteOne({ _id: productId }).exec();
    }
};
exports.ProductMongooseRepository = ProductMongooseRepository;
exports.ProductMongooseRepository = ProductMongooseRepository = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(product_schema_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductMongooseRepository);
//# sourceMappingURL=product-mongoose-repository%20.js.map
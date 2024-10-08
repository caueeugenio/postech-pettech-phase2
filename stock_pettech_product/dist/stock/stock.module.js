"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const product_schema_1 = require("./schemas/product.schema");
const product_repository_1 = require("./repositories/product.repository");
const product_mongoose_repository_1 = require("./repositories/mongoose/product-mongoose-repository ");
const stock_service_1 = require("./services/stock.service");
const stock_controller_1 = require("./controllers/stock.controller");
const prometheus_service_1 = require("../shared/services/prometheus.service");
let StockModule = class StockModule {
};
exports.StockModule = StockModule;
exports.StockModule = StockModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: product_schema_1.Product.name, schema: product_schema_1.ProductSchema }]),
        ],
        controllers: [stock_controller_1.StockController],
        providers: [
            {
                provide: product_repository_1.ProductRepository,
                useClass: product_mongoose_repository_1.ProductMongooseRepository,
            },
            stock_service_1.StockService,
            prometheus_service_1.PrometheusService,
        ],
    })
], StockModule);
//# sourceMappingURL=stock.module.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const http_exception_filter_1 = require("./shared/filters/http-exception.filter");
const swagger_1 = require("@nestjs/swagger");
const redoc_middleware_1 = require("./shared/middlewares/redoc.middleware");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('pettech-stock')
        .setDescription('The pettech-stock API description')
        .setVersion('1.0')
        .addTag('stock')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    (0, redoc_middleware_1.setupRedoc)(app);
    await app.listen(Number(process.env.PORT) || 3010);
}
bootstrap();
//# sourceMappingURL=main.js.map
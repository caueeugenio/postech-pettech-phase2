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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const prometheus_service_1 = require("../services/prometheus.service");
let LoggingInterceptor = class LoggingInterceptor {
    constructor(prometheusService) {
        this.prometheusService = prometheusService;
    }
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const now = Date.now();
        return next.handle().pipe((0, rxjs_1.tap)(() => {
            console.log('Route =>', request.route.path);
            console.log(`After... ${Date.now() - now}ms`);
            const duration = Date.now() - now;
            this.prometheusService.sendMetrics
                .labels(request.route.path)
                .observe(duration / 1000);
        }));
    }
};
exports.LoggingInterceptor = LoggingInterceptor;
exports.LoggingInterceptor = LoggingInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prometheus_service_1.PrometheusService])
], LoggingInterceptor);
//# sourceMappingURL=logging.interceptor.js.map
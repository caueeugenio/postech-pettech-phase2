import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PrometheusService } from '../services/prometheus.service';
export declare class LoggingInterceptor implements NestInterceptor {
    private readonly prometheusService;
    constructor(prometheusService: PrometheusService);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}

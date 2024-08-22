import { Histogram } from './../../../node_modules/prom-client/index.d'
import { Injectable } from '@nestjs/common'
import * as prometheus from 'prom-client'

@Injectable()
export class PrometheusService {
  private httpRequestDurationMicroseconds: prometheus.Histogram<'route'>
  constructor() {
    this.httpRequestDurationMicroseconds = new prometheus.Histogram({
      name: 'http_request_duration_ms',
      help: 'Duration of HTTP requests in ms',
      labelNames: ['route'],
      buckets: [0.1, 0.3, 1, 1.5, 2, 3, 5],
    })
  }

  get sendMetrics() {
    return this.httpRequestDurationMicroseconds
  }
}

import { WebSDK } from '@opentelemetry/sdk-web';
import { ConsoleSpanExporter } from '@opentelemetry/sdk-web';
import { Resource } from '@opentelemetry/resources';
import { SEMRESATTRS_SERVICE_NAME, SEMRESATTRS_SERVICE_VERSION } from '@opentelemetry/semantic-conventions';
import { getWebAutoInstrumentations } from '@opentelemetry/auto-instrumentations-web';
import { BatchLogRecordProcessor, ConsoleLogRecordExporter, LoggerProvider } from '@opentelemetry/sdk-logs';
import { OTLPLogExporter } from '@opentelemetry/exporter-logs-otlp-http';
import { logs } from '@opentelemetry/api';

// Initialize OpenTelemetry Web SDK
const sdk = new WebSDK({
  resource: new Resource({
    [SEMRESATTRS_SERVICE_NAME]: 'my-3d-art',
    [SEMRESATTRS_SERVICE_VERSION]: '0.1.0',
  }),
  instrumentations: [getWebAutoInstrumentations()],
});

// Initialize logging
const loggerProvider = new LoggerProvider({
  resource: new Resource({
    [SEMRESATTRS_SERVICE_NAME]: 'my-3d-art',
    [SEMRESATTRS_SERVICE_VERSION]: '0.1.0',
  }),
});

// Configure OTLP Log Exporter with your provided endpoint
const logExporter = new OTLPLogExporter({
  url: 'https://ds15mfSgBlKQVdG2edNV:SPQMc-N7hnIg2EwperqseHNsRKyMDumx@191369360817.collect.observe-eng.com/v2/otel/v1/logs',
  headers: {}
});

// Add console exporter for development
loggerProvider.addLogRecordProcessor(new BatchLogRecordProcessor(logExporter));
loggerProvider.addLogRecordProcessor(new BatchLogRecordProcessor(new ConsoleLogRecordExporter()));

// Register the logger provider
logs.setGlobalLoggerProvider(loggerProvider);

// Initialize the SDK
sdk.start()
  .then(() => console.log('OpenTelemetry initialized successfully'))
  .catch((error) => console.log('Error initializing OpenTelemetry', error));
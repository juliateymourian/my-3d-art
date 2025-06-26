import { logs } from '@opentelemetry/api';

// Get the logger instance
const logger = logs.getLogger('my-3d-art', '0.1.0');

export const log = {
  info: (message, attributes = {}) => {
    console.log(`[INFO] ${message}`, attributes);
    logger.emit({
      body: message,
      severityText: 'INFO',
      attributes: {
        ...attributes,
        timestamp: new Date().toISOString(),
      },
    });
  },
  
  warn: (message, attributes = {}) => {
    console.warn(`[WARN] ${message}`, attributes);
    logger.emit({
      body: message,
      severityText: 'WARN',
      attributes: {
        ...attributes,
        timestamp: new Date().toISOString(),
      },
    });
  },
  
  error: (message, error, attributes = {}) => {
    console.error(`[ERROR] ${message}`, error, attributes);
    logger.emit({
      body: message,
      severityText: 'ERROR',
      attributes: {
        ...attributes,
        error: error?.message || error,
        stack: error?.stack,
        timestamp: new Date().toISOString(),
      },
    });
  },
};
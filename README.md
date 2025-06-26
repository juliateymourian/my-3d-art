This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## OpenTelemetry Instrumentation

This project has been configured with OpenTelemetry auto-instrumentation for comprehensive observability:

### Features
- **Automatic web instrumentation** for client-side tracing
- **Structured logging** with OTLP export to Observe
- **Custom logger utility** for application-specific events
- **Next.js framework instrumentation**

### Configuration
- `otel.js` - Main OpenTelemetry configuration
- `instrumentation.ts` - Next.js instrumentation hook
- `lib/logger.js` - Custom logging utility
- `pages/_app.js` - Application initialization with OTEL

### Logs Export
Logs are automatically sent to: `https://191369360817.collect.observe-eng.com/v2/otel/v1/logs`

### Usage
Use the custom logger in your components:
```javascript
import { log } from '../lib/logger';

// Info logging
log.info('User action', { action: 'click', component: 'button' });

// Error logging
log.error('API error', error, { endpoint: '/api/data' });
```

## Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

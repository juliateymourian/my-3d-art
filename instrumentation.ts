export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // This will run on the server side
    console.log('OpenTelemetry server instrumentation registered');
  }
  
  if (process.env.NEXT_RUNTIME === 'edge') {
    // This will run on the edge runtime
    console.log('OpenTelemetry edge instrumentation registered');
  }
}
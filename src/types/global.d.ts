export {};

declare global {
  let TextEncoder: typeof TextEncoder;
  let TextDecoder: typeof TextDecoder;
  let fetch: typeof fetch;
  namespace NodeJS {
    interface Global {
      fetch: typeof fetch;
    }
  }
}

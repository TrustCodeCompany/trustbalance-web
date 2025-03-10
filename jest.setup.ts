/// <reference lib="dom" />
// /// <reference types="node" />
import '@testing-library/jest-dom';

const customTextEncoder = {
  encoding: 'utf-8',
  encode(input: string): Uint8Array {
    const arr = new Uint8Array(input.length);
    for (let i = 0; i < input.length; i++) {
      arr[i] = input.charCodeAt(i);
    }
    return arr;
  },
  encodeInto(
    source: string,
    destination: Uint8Array,
  ): TextEncoderEncodeIntoResult {
    const encoded = this.encode(source);
    destination.set(encoded);
    return {
      read: source.length,
      written: encoded.length,
    };
  },
};

const customTextDecoder = {
  encoding: 'utf-8' as const,
  fatal: false as const,
  ignoreBOM: false as const,
  decode(input?: AllowSharedBufferSource, options?: TextDecodeOptions): string {
    if (!input) return '';

    let array: Uint8Array;
    if (input instanceof Uint8Array) {
      array = input;
    } else if (input instanceof ArrayBuffer) {
      array = new Uint8Array(input);
    } else if ('buffer' in input) {
      array = new Uint8Array(input.buffer);
    } else {
      throw new Error('Tipo de entrada no soportado');
    }

    return String.fromCharCode.apply(null, Array.from(array));
  },
};

// @ts-ignore
globalThis.TextEncoder = class TextEncoder {
  constructor() {
    return customTextEncoder;
  }
};

// @ts-ignore
globalThis.TextDecoder = class TextDecoder {
  constructor() {
    return customTextDecoder;
  }
};

// Mock de useNavigate
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: () => jest.fn(),
}));

// Configurar fetch global para el entorno de pruebas
if (!globalThis.fetch) {
  globalThis.fetch = jest.fn() as unknown as typeof fetch;
}

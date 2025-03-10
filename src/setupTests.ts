// /// <reference types="node" />

declare global {
  interface Window {
    TextEncoder: CustomTextEncoder;
    TextDecoder: CustomTextDecoder;
  }
}

interface CustomTextEncoder {
  encode(input: string): Uint8Array;
}

interface CustomTextDecoder {
  decode(input: Uint8Array): string;
}

const customTextEncoder: CustomTextEncoder = {
  encode(input: string): Uint8Array {
    const arr = new Uint8Array(input.length);
    for (let i = 0; i < input.length; i++) {
      arr[i] = input.charCodeAt(i);
    }
    return arr;
  },
};

const customTextDecoder: CustomTextDecoder = {
  decode(input: Uint8Array): string {
    return String.fromCharCode.apply(null, Array.from(input));
  },
};

(window as any).TextEncoder = customTextEncoder;
(window as any).TextDecoder = customTextDecoder;

// Mock de useNavigate
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: () => jest.fn(),
}));

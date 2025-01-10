// jest.config.ts
export default {
  testEnvironment: 'jest-environment-jsdom', // Same name of the lib you installed
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // The file you created to extend jest config and "implement" the jest-dom environment in the jest globals
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js', // The global stub for weird files
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy', // The mock for style related files
    '^@/(.*)$': '<rootDir>/src/$1', // [optional] Are you using aliases?
  },
  collectCoverageFrom: [
    // 'src/**/*.{ts,tsx}', // Incluye todos los archivos TypeScript y TSX de `src/`
    'src/components/**/*.{ts,tsx}', // Solo los componentes
    '!src/**/*.d.ts', // Excluye archivos de declaración de TypeScript
    '!src/index.tsx', // Excluye `index.tsx` (generalmente el punto de entrada principal)
    '!src/App.tsx', // Excluye `App.tsx`
    '!src/main.tsx', // Excluye `App.tsx`
    '!src/config/**', // Excluye toda la carpeta de configuraciones
    '!src/env/**', // Excluye los archivos de entorno
    '!src/resources/**', // Excluye carpetas de recursos (imágenes, textos, etc.)
    '!src/**/__tests__/**', // Excluye las carpetas de pruebas si no quieres contarlas en la cobertura
    '!src/__tests__/**', // Excluye las carpetas de pruebas si no quieres contarlas en la cobertura
    '!**/__tests__/**', // Excluye las carpetas de pruebas si no quieres contarlas en la cobertura
    '!**/*.test.{ts,tsx}', // Excluye los archivos de prueba
    '!**/*.spec.{ts,tsx}', // Excluye los archivos de prueba
    '!jest.config.ts', // Excluye el archivo de configuración de Jest
    '!index.html', // Excluye el archivo HTML principal
    '!eslint.config.js', // Excluye el archivo de configuración de ESLint
    '!dist/**', // Excluye la carpeta de compilación
    '!node_modules/**', // Excluye las dependencias de node_modules
    '!coverage/**', // Excluye la carpeta de cobertura
    '!package.json', // Excluye el archivo package.json
    '!package-lock.json', // Excluye el archivo package-lock.json
    '!README.md', // Excluye el archivo README.md
    '!LICENSE', // Excluye el archivo LICENSE
    '!tsconfig.json', // Excluye el archivo tsconfig.json
    '!vite.config.ts', // Excluye el archivo vite.config.ts
    '!jest.setup.ts', // Excluye el archivo de configuración de Jest
    '!**/__mocks__/**', // Excluye todos los archivos de mocks
    '!**/__tests__/**', // Excluye todos los archivos de pruebas
    '!**/__snapshots__/**', // Excluye todos los archivos de instantáneas
    '!**/*.d.ts', // Excluye todos los archivos de declaración de tipos
    '!**/*.test.ts', // Excluye todos los archivos de prueba
    '!**/*.spec.ts', // Excluye todos los archivos de prueba
    '!**/*.test.tsx', // Excluye todos los archivos de prueba
    '!**/*.spec.tsx', // Excluye todos los archivos de prueba
    '!**/*.test.js', // Excluye todos los archivos de prueba
    '!**/*.spec.js', // Excluye todos los archivos de prueba
    '!**/*.test.jsx', // Excluye todos los archivos de prueba
    '!**/*.spec.jsx', // Excluye todos los archivos de prueba
    '!**/*.d.ts', // Excluye todos los archivos de declaración de tipos
    '!**/*.stories.*', // Excluye todos los archivos de historias
    '!**/*.stories.ts', // Excluye todos los archivos de historias
    '!**/*.stories.tsx', // Excluye todos los archivos de historias
    '!**/*.stories.js', // Excluye todos los archivos de historias
    '!**/*.stories.jsx', // Excluye todos los archivos de historias
    '!**/*.story.ts', // Excluye todos los archivos de historias
    '!**/*.story.tsx', // Excluye todos los archivos de historias
    '!**/*.story.js', // Excluye todos los archivos de historias
    '!**/*.story.jsx', // Excluye todos los archivos de historias
  ],
};

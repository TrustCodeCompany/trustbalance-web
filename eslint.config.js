import eslintPluginReact from 'eslint-plugin-react';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      react: eslintPluginReact,
      prettier: prettierPlugin, // Agregar el plugin de Prettier
    },
    rules: {
      ...prettierConfig.rules, // Integrar reglas de Prettier
      'prettier/prettier': 'error', // Marcar errores de formato como errores de ESLint
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-debugger': 'warn',
      'object-curly-spacing': ['warn', 'always'],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];

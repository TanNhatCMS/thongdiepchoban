import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    ignores: ['**/node_modules/'],
  },
  ...compat.extends(
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'next',
    'next/core-web-vitals',
  ),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        io: true,
        chrome: true,
      },

      ecmaVersion: 10,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },

        project: ['./tsconfig.json'],
        tsconfigRootDir: '.',
        createDefaultProgram: true,

        babelOptions: {
          presets: [await import('next/babel.js').then((mod) => mod.default)],
        },
      },
    },

    rules: {},
  },
  {
    files: ['**/*.ts?(x)', '**/*.js?(x)'],

    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-sort-props': 'off',
      'react/function-component-definition': 'off',
      'no-shadow': 'off',
    },
  },
];

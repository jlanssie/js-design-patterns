import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

module.exports = defineConfig([
  {
    extends: [...tseslint.configs.recommended],
    files: ['**/*.{ts,mts,cts}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    ignores: ['**/*.js', '**/*.mjs', '**/*.cjs'],
  },
]);

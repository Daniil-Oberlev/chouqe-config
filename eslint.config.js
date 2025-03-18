import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config({
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  files: ['**/*.{ts,tsx}'],
  ignores: [
    'node_modules/',
    'dist/',
    '*.config.js',
    '*.json',
    'src/components/ui/lib/',
    'src/hooks/use-toast.ts'
  ],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'perfectionist/sort-array-includes': ['error', { order: 'asc', type: 'alphabetical' }],
    'perfectionist/sort-interfaces': [
      'error',
      { groups: ['unknown', 'method', 'multiline'], order: 'asc', type: 'alphabetical' }
    ],
    'perfectionist/sort-jsx-props': [
      'error',
      {
        customGroups: { callback: 'on*', reserved: ['key', 'ref'] },
        groups: ['shorthand', 'reserved', 'multiline', 'unknown', 'callback'],
        order: 'asc',
        type: 'alphabetical'
      }
    ],
    'perfectionist/sort-union-types': [
      'error',
      {
        groups: [
          'conditional',
          'function',
          'import',
          'intersection',
          'keyword',
          'literal',
          'named',
          'object',
          'operator',
          'tuple',
          'union',
          'nullish'
        ],
        order: 'asc',
        specialCharacters: 'keep',
        type: 'alphabetical'
      }
    ],
    'perfectionist/sort-types': [
      'error',
      {
        order: 'asc',
        type: 'alphabetical'
      }
    ],
    'perfectionist/sort-variables': [
      'error',
      {
        order: 'asc',
        type: 'alphabetical'
      }
    ],
    'react-hooks/exhaustive-deps': 'warn',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-undef': 'error',
    'react/require-render-return': 'error',
    'prefer-arrow-callback': 'error',
    'eol-last': ['error', 'always'],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    'no-await-in-loop': 'error',
    'no-unused-vars': 'error',
    'no-redundant-conditions': 'error',
    'prefer-template': 'error',
    'no-eval': 'error',
    'no-magic-numbers': ['error', { ignoreArrayIndexes: true }],
    'no-duplicate-imports': 'error',
    'no-var': 'error',
    'eqeqeq': 'error',
    'no-console': 'warn',
    'react-hooks/exhaustive-deps': 'warn'
  }
})

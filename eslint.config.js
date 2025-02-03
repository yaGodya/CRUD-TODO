import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginTs from '@typescript-eslint/eslint-plugin'
import eslintParser from '@typescript-eslint/parser'

export default [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: eslintParser,
      parserOptions: {
        project: ['./tsconfig.lint.json'],
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react: eslintPluginReact,
      prettier: eslintPluginPrettier,
      '@typescript-eslint': eslintPluginTs,
    },
    rules: {
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginTs.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-max-props-per-line': [
        'error',
        {
          maximum: 2,
          when: 'always',
        },
      ],
    },
  },
]

module.exports = {
  extends: [
    'next',
    'prettier',
    'next/core-web-vitals',
    'plugin:@tanstack/eslint-plugin-query/recommended'
  ],
  plugins: ['react', 'react-hooks', 'prettier', '@tanstack/query', '@typescript-eslint'],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/no-rest-destructuring': 'warn',
    '@tanstack/query/stable-query-client': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'prefer-const': 'error',
    'react-hooks/exhaustive-deps': 'error'
  }
};

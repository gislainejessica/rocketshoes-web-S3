module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension':[
      'warn', {extensions:['.jsx', '.js']}
    ],
    'import/prefer-export-default': 'off',
    'no-console': ['error', { allow:['tron']}],
    'no-param-reassign' : 'off',
  }
}

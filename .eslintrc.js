module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/require-default-props': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'react/jsx-one-expression-per-line': 'off',
    'react/tsx-indent': 'off',
    'react/function-component-definition': 'off',
    'no-console': 'off',
    '@typescript-eslint/indent': 'off',
    indent: 'off',
    // 'linebreak-style': [
    //   'error',
    //   process.platform === 'win32' ? 'windows' : 'unix',
    // ],
    'linebreak-style': 'off',
    'arrow-parens': ['error', 'as-needed'], //箭頭函數參數是否要加()
    'no-param-reassign': 'off', //讓參數賦值
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/no-extraneous-dependencies': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': ['error', 'after'], //求把換行符放在操作符後面
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};

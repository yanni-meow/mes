module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'max-len': 0,
    'jsx-a11y/alt-text': 0,
    'react/button-has-type': 0,
    'react/prop-types': 0,
    'react/no-unescaped-entities': 0,
    'no-unused-vars': 1,
    'react/no-array-index-key': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 1,
    'jsx-a11y/click-events-have-key-events': 1,
    'no-param-reassign': 1,
    'no-return-assign': 1,
    'consistent-return': 1,
    'no-unused-expressions': 1,
    'react/jsx-closing-tag-location': 1,
    'import/prefer-default-export': 0,
  },
};

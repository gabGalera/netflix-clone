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
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': 0,
    'max-len': 0,
    'no-unused-vars': 0,
    'react/no-unknown-property': [
      0,
      {
        ignore: [
          'jsx',
        ],
      },
    ],
    'jsx-a11y/media-has-caption': [
      0, {
        audio: ['Audio'],
        video: ['Video'],
        track: ['Track'],
      }],
  },
};

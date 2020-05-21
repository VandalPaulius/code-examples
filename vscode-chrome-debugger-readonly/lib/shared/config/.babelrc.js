module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        corejs: '3.0.0',
        targets: {
          browsers: ['> 1%', 'not dead', 'not ie 11', 'not op_mini all'],
        },
        useBuiltIns: 'entry',
        exclude: ['transform-regenerator', 'transform-async-to-generator'],
      },
    ],
  ],
  plugins: [
    'module:fast-async',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-proposal-class-properties',
    'transform-react-remove-prop-types',
    '@babel/plugin-proposal-optional-chaining',
  ],
  env: {
    development: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              browsers: 'last 1 chrome version',
            },
          },
        ],
      ],
    },
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs'],
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              browsers: 'last 1 chrome version',
            },
          },
        ],
      ],
    },
  },
}

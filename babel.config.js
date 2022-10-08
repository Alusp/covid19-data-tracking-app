// const esModules = ['lodash-es', 'axios'].join('|');

module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  // transform: {
  //   [`^(${esModules}).+\\.js$`]: 'babel-jest',
  // },
  // transformIgnorePatterns: [`node_modules/(?!(${esModules}))`],
};

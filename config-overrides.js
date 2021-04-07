const { useBabelRc, override } = require('customize-cra')

module.exports = function override(config, env) {
  useBabelRc();

  //See https://github.com/plouc/nivo/issues/1290
  config.module.rules.push({
      test: /react-spring/,
      sideEffects: true,
  });

  return config;
}

const licenseChecker = require('license-checker');
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

module.exports = async () => {
  let licenseInformation = await new Promise((resolve, reject) => {
    licenseChecker.init(
      {
        start: __dirname,
        production: true
      },
      function(err, json) {
        err ? reject(err) : resolve(json);
      }
    );
  });

  let licenses = [];

  Object.keys(licenseInformation).forEach(name => {
    let license = licenseInformation[name];

    licenses.push(
      [
        name + ':',
        '  author: ' + license.publisher,
        '  license: ' + license.licenses,
        '  repository: ' + license.repository
      ].join('\n')
    );
  });

  let banner = licenses.join('\n\n');

  let baseConfig = {
    mode: 'development',
    entry: './lib/index.js',
    devtool: 'sourcemap',
    target: 'web',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'avatars.js',
      library: 'Avatars',
      libraryTarget: 'umd',
      libraryExport: 'default',
      umdNamedDefine: true
    },
    plugins: [new webpack.BannerPlugin(banner)]
  };

  let minifyConfig = merge({}, baseConfig, {
    mode: 'production',
    output: {
      filename: 'avatars.min.js'
    }
  });

  return [baseConfig, minifyConfig];
};

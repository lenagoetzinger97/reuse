// vue.config.js
module.exports = {
    configureWebpack: {
        output: {
            publicPath: '/static/'
        }
    }
}

const path = require("path");

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/scss/main.scss")]
    }
  }
};
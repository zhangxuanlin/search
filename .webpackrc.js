const path = require('path');

export default {
    "theme": {
        "primary-color": "#f00",
        "@link-color": "#dc6aac",
        "@border-radius-base": "5px",
        "@font-size-base": "16px",
        "@line-height-base": "1.2"
      },
    "entry": "./src/index.js",
    "disableCSSModules": false,
    "hash": false,
    "proxy": {
        "/xsps": {
            "target": "http://192.168.1.51:10310",
            "port": 8888,
            "changeOrigin": true
        }
    },
    "env": {
        "development": {
            "extraBabelPlugins": [
                "dva-hmr",
                ["import", { "libraryName": "antd", "style": "css" }],
            ]
        },
        "production": {
            "publicPath": "./",
            "extraBabelPlugins": [
                ["import", { "libraryName": "antd", "style": "css" }],
            ]
        }
    }
}

var packageConfig=require('./package.json');
module.exports = function (configs) {
    configs = Object.assign({}, configs, {
        name: packageConfig.name,
        defaultPort: 8002,
        devServer: Object.assign({},
            configs.devServer,
            {
                proxy: [{
                    context: ['/**', '!/app/**', '!/webpack/**', '!/webpack-dev-server/**', '!/sockjs-node/**', '!/index.html'],
                    target: 'http://tstq1.360kad.com',
                    changeOrigin: true
                }]
            }),
        apps: ['home'],
        entries: ['src/home/index']
    });
    return configs;
};
/*module.exports = {
    "name":"default",
    "apps":['home'],
    "open": false,
    "defaultPort": 8002,
    "server": "127.0.0.1",
    "imageInLineSize": 8192,
    "publicPath": "/assets/",
    "devServer": {
        "noInfo": true,
        "proxy": undefined
         //proxy: [{
         //context: ['/**', '!/static/**', '!/webpack/**', '!/webpack-dev-server/**', '!/sockjs-node/**', '!/index.html'],
         //target: 'http://tstmanage.360kad.com
         //',
         //changeOrigin: true
         //}]
    },
    "postcss": {
        "autoprefixer": {
            "browsers": [
                "last 2 versions",
                "Firefox ESR",
                "> 1%",
                "ie >= 8"
            ]
        }
    },
    "webpack": {
        "dllConfig": {
            "vendors": ['react']
        }
    },
    "babel": {
        "query": {
            "presets": [
                "es2015",
                "stage-0",
                "react"
            ],
            "cacheDirectory": true,
             "plugins": [
            "add-module-exports",
            "transform-runtime",
            "transform-decorators-legacy",
        ]
        }
    },
    "htmlWebpackPlugin": {
        "title": "",
        "appMountId": "",
    },
    "entries": ['src/index']
};*/


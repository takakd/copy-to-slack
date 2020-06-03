const path = require('path');
const webpack = require('webpack');

const config = (env) => {
    const name = env.entry;
    return {
        optimization: {
            minimize: env.production,
        },
        devtool: env.production ? false : 'inline-source-map',
        entry: `./src/${name}.js`,
        output: {
            path: path.resolve(__dirname, './extroot/'),
            filename: `${name}.js`
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        "targets": {
                                            // ES2015
                                            "chrome": "60"
                                        }
                                    }
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                RUNNING_ON_CHROME: true
            })
        ]
    }
};

module.exports = env => {
    return config(env);
}

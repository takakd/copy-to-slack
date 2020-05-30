const path = require('path');

const config = (name) => {
    return {

optimization: {
        minimize: false
    },

        entry: `./src/${name}.js`,
        output: {
            path: path.resolve(__dirname, './'),
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
        }
    }
};

module.exports = env => {
    return config(env.entry);
}

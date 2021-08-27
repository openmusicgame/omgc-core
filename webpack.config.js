const path = require("path");
/** @type {import("webpack").Configuration} */
module.exports = {
    entry: {
        "lib": './src/index.ts',
        "phi": './packages/omgc-transformer-phigros/test.ts'
    },
    devtool: 'source-map',
    target: "node",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/
            }
        ]
    },
    externals: {
        "lodash": "_"
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    output: {
        filename: '[name].umd.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'OMGC',
        libraryTarget: 'umd',
        umdNamedDefine: true
    }
};

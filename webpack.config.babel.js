import path from 'path';
import DashboardPlugin from 'webpack-dashboard/plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';


export default {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/build')
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src/js')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react']
                        }
                    },
                    {
                        loader: 'eslint-loader'
                    }
                ]
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'src/js'),
        compress: true,
        port: 9000
    },
    devtool: 'source-map',
    plugins: [
        new DashboardPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html')
        })
    ]
}

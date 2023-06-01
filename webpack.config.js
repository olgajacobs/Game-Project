import { path } from 'path'
import { HtmlWebpackPlugin } from 'html-webpack-plugin'
import { CopyPlugin } from 'copy-webpack-plugin'
import { MiniCssExtractPlugin } from 'mini-css-extract-plugin'
import { CssMinimizerPlugin } from 'css-minimizer-webpack-plugin'

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    entry: './script.ts',
    mode: isProduction ? "'production'" : "'development'",
    output: {
        path: path.resolve(__dirname, "'dist'"),
        filename: "'bundle.js'",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "'ts-loader'",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "'asset/resource'",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "'asset/resource'",
            },
        ],
    },
    resolve: {
        extensions: ["'.ts'", "'.js'"],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: "'assets'", to: "'assets'" }],
        }),
        new HtmlWebpackPlugin({
            template: "'./index.html'",
        }),
        new MiniCssExtractPlugin(),
    ],
    optimization: {
        minimizer: ["'...'", new CssMinimizerPlugin()],
    },
    devtool: isProduction ? "'hidden-source-map'" : "'source-map'",
}

import webpack from "webpack";
import type {RuleSetRule} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}:BuildOptions): RuleSetRule[] {
    // Если мы используем ts-loader, то нам не нужен babel-loader
    // для транспиляции tsx в js (т.к. ts-loader это делает)
    const tsLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node_modules/"
    };
    const sassLoader: webpack.RuleSetRule =   {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            localIdentName: isDev ? "[path]==[local]==[hash:base64:5]" : "[hash:base64:5]",
                            auto: (resPath:string) => Boolean(resPath.endsWith(".module.scss")),
                        },
                    },
                },
                // Compiles Sass to CSS
                "sass-loader",
            ],
        }
    return [
        tsLoader,
        sassLoader
    ];
}

import webpack from "webpack";
import type {RuleSetRule} from "webpack";

export function buildLoaders(): RuleSetRule[] {
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
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
            ],
        }
    return [
        tsLoader,
        sassLoader
    ];
}

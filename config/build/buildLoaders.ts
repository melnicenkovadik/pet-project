import webpack from "webpack";
import type {RuleSetRule} from "webpack";

export function buildLoaders(): RuleSetRule[] {
    const tsLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node_modules/"
    };
    return [
        tsLoader,
    ];
}

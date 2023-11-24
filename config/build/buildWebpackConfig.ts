import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildLoaders, buildResolvers, buildPlugins} from "./";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode,paths,isDev} = options
    const config = {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolvers(),

        plugins: buildPlugins(options),

    };

    return config;
}

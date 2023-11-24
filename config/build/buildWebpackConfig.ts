import type {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildLoaders, buildResolvers, buildPlugins} from "./";
import {buildDevServer} from "./buildDevServer";

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
        devtool: isDev ? "inline-source-map" : undefined,
        plugins: buildPlugins(options),
        devServer: isDev ? buildDevServer(options) : undefined

    };

    return config;
}

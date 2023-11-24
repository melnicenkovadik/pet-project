import {BuildOptions} from "./types/config";
import  type {Configuration as DevServerConfiguration} from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    const {paths} = options;

    return {
        // contentBase: paths.build,
        // compress: true,
        port: options.port,
        // hot: true,
        open: true,
        // historyApiFallback: true,
        // overlay: true,
        // stats: "errors-only",
        // clientLogLevel: "silent",
        // watchContentBase: true,
        // watchOptions: {
        //     ignored: /node_modules/
        // }
    };
}

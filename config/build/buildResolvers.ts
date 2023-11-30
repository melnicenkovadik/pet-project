import type {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(options:BuildOptions): ResolveOptions {
    const {mode,paths,isDev} = options

    return {
        extensions: [".tsx", ".ts", ".js"],
        preferAbsolute: true,
        modules: [
            paths.src,
            'node_modules'
        ],
        mainFiles: ["index"],
        alias: {}
    };
}

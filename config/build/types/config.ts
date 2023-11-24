export type BuildMode = "development" | "production" | "none";

export type BuildPaths = {
    entry: string;
    build: string;
    html: string;
}
export type BuildEnv = {
    mode: BuildMode;
    port: number;
}
export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}

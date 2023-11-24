export type BuildMode = "development" | "production" | "none";

export type BuildPaths = {
    entry: string;
    build: string;
    html: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
}

import webpack from "webpack";
import path from "path";
import { BuildOptions } from "./types/config";

const root = path.resolve(__dirname, "..", "..", "src");

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [options.paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {},
  };
}

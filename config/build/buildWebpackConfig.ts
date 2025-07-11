import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths } = options;
  return {
    mode: mode,
    entry: paths.entry,

    output: {
      filename: "[name].[contenthash].ts",
      path: paths.build,
      clean: true,
    },

    plugins: buildPlugins(options),

    module: {
      rules: buildLoaders(),
    },

    resolve: buildResolvers(),
  };
}

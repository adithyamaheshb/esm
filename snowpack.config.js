// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: {
      url: "/",
      static: true,
    },
    src: "/dist",
  },
  plugins: [
    /* ... */
    "@snowpack/plugin-typescript",
    "@snowpack/plugin-sass",
    "@snowpack/plugin-react-refresh",
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: "es2020",
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};

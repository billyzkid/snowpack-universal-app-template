export default {
  mount: {
    client: { url: '/' }
  },
  plugins: [
    [ '@snowpack/plugin-sass' ]
  ],
  routes: [
  ],
  optimize: {
    //bundle: true,
    //minify: true,
  },
  packageOptions: {
  },
  devOptions: {
    port: 3000
  },
  buildOptions: {
    //watch: true,
  }
};

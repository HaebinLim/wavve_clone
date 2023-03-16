module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import 'node_modules/reset-css/sass/_reset.scss';
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_mixins.scss";
        `
      }
    }
  }
}
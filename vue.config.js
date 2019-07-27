module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/F2E_week2_FreeCell/dist/' : '/',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/scss/all.scss";`
      }
    }
  }
}

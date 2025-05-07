export default {
  server: {
    proxy: {
      "/v1/shape": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
};

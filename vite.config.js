import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // Main is in the root
        main: resolve(__dirname, "index.html"),
        // Others are inside the src folder
        about: resolve(__dirname, "src", "about.html"),
        contact: resolve(__dirname, "src", "contact.html"),
        products: resolve(__dirname, "src", "products.html"),
        addtocart: resolve(__dirname, "src", "add-to-cart.html"),
      },
    },
  },
});
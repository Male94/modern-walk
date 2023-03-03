const tailswindcss = require("tailwindcss");

module.exports = {
  plugins: [tailswindcss("./tailwind.config.js"), require("autoprefixer")],
};

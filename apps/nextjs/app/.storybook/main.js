const path = require("path")

module.exports = {
  stories: ["../components/**/**/*.stories.@(ts|tsx|js|jsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
  ],
  // Add Next.js preset
  presets: [path.resolve(__dirname, "./next-preset.js")],
}

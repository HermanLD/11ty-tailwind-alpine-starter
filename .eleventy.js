const htmlmin = require("html-minifier");

const now = String(Date.now());

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./styles/tailwind.config.js");
  eleventyConfig.addWatchTarget("./styles/tailwind.css");

  // Allows tailwind to build before restarting
  eleventyConfig.setWatchThrottleWaitTime(1000);

  // Use to pass folders or files to _site
  // EXAMPLES:
  // eleventyConfig.addPassthroughCopy("js/index.js");
  // eleventyConfig.addPassthroughCopy("js");
  // eleventyConfig.addPassthroughCopy("images");

  eleventyConfig.addShortcode("version", function () {
    return now;
  });

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith(".html")
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });
};

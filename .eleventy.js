module.exports = function (eleventyConfig) {
  // Passthrough file copy
  eleventyConfig.addPassthroughCopy("src/css");

  // Set input and output folders
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};



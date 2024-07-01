const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
	eleventyConfig.addPassthroughCopy("src/images/*");

	eleventyConfig.addPlugin(pluginWebc, {
		components: "src/_components/**/*.webc",
	});

	return {
		dir: {
			input: "src",
			output: "dist",
		},
	};
};

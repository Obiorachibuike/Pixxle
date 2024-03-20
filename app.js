const sharp = require("sharp");

compressImage = async (inputPath, outputPath, options = {}) => {
  try {
    return await sharp(inputPath)
      .resize(options.width, options.height)
      .toFile(outputPath);
  } catch (error) {
    return "Error occurred while compressing image"
  }
};

module.exports = { compressImage };

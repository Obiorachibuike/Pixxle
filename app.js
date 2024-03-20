const sharp = require('sharp');

 compressImage = async (inputPath, outputPath, options = {}) => {
    try {
        await sharp(inputPath)
            .resize(options.width, options.height)
            .toFile(outputPath);
        console.log('Image compressed successfully!');
    } catch (error) {
        console.error('Error occurred while compressing image:', error);
        return
    }
}

module.exports = compressImage;

Below is a sample README.md file for your image-compressor npm package:

```markdown
# Image Compressor

An npm package for image compression using the Sharp library.

## Installation

You can install the Image Compressor package via npm:

```bash
npm install image-compressor
```

## Usage

In your JavaScript code, require the `compressImage` function from the package and use it to compress images.

```javascript
const compressImage = require('image-compressor');

// Example usage
compressImage('input.jpg', 'output.jpg', { width: 800, height: 600 });
```

### Parameters

- `inputPath`: The path to the input image file.
- `outputPath`: The path where the compressed image will be saved.
- `options`: An optional object specifying the width and height of the compressed image. If not provided, the image will be compressed to its original dimensions.

### Example

```javascript
compressImage('input.jpg', 'output.jpg', { width: 800, height: 600 });
```

## Dependencies

This package relies on the Sharp library for image processing. You don't need to install it separately; it's included as a dependency.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to the developers of the Sharp library for providing powerful image processing capabilities.
```

Make sure to replace the license details with your preferred license and provide appropriate acknowledgments or credits. Additionally, you may want to include more detailed instructions or examples depending on the complexity of your package.
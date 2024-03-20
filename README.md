


# Pixxle

An npm package for image compression using the Sharp library.

## Installation

You can install the Pixxle package via npm:

```bash
npm install pixxle
```

## Usage

In your JavaScript code, require the `compressImage` function from the package and use it to compress images.

```javascript
const pixxle = require('pixxle');

// Example usage
const compressedImage = pixxle.compressImage('input.jpg', 'output.jpg', { width: 800, height: 600 });
```

### Parameters

- `inputPath`: The path to the input image file.
- `outputPath`: The path where the compressed image will be saved.
- `options`: An optional object specifying the width and height of the compressed image. If not provided, the image will be compressed to its original dimensions.

### Example

```javascript
pixxle.compressImage('input.jpg', 'output.jpg', { width: 800, height: 600 });
```

## Dependencies

This package relies on the Sharp library for image processing. You don't need to install it separately; it's included as a dependency.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to the developers of the Sharp library for providing powerful image processing capabilities.
```


const fs = require('fs');
const sharp = require('sharp');
const { resolve } = require('path');
const Boom = require('@hapi/boom');

module.exports = {
  handleImageUpload: (image) => {
    try {
      const { filename } = image.hapi;
      const ext = filename.split('.').pop();
      const filenameNew = `${Date.now()}-article.${ext}`;
      const pathImg = resolve(__dirname, `../../public/images/${filenameNew}`);

      // Check directory exists
      if (!fs.existsSync(resolve(__dirname, '../../public/'))) {
        fs.mkdirSync(resolve(__dirname, '../../public/'));
        fs.mkdirSync(resolve(__dirname, '../../public/images/'));
        fs.mkdirSync(resolve(__dirname, '../../public/images/small/'));
        fs.mkdirSync(resolve(__dirname, '../../public/images/medium/'));
        fs.mkdirSync(resolve(__dirname, '../../public/images/large/'));
      }

      fs.writeFileSync(pathImg, image._data); // Uploading image to public/images/
      if (!fs.existsSync(pathImg)) {
        throw Boom.badRequest('Error uploading image');
      }

      // Compress image
      sharp(pathImg).resize(480).toFile(resolve(__dirname, `../../public/images/small/${filenameNew}`));
      sharp(pathImg).resize(800).toFile(resolve(__dirname, `../../public/images/medium/${filenameNew}`));
      sharp(pathImg).resize(1000).toFile(resolve(__dirname, `../../public/images/large/${filenameNew}`))
        .then(() => {
          fs.unlinkSync(pathImg);
        });

      return filenameNew;
    } catch (error) {
      throw Boom.badRequest(error);
    }
  },
  handleImageDelete: (filename) => {
    try {
      const pathSmall = resolve(__dirname, `../../public/images/small/${filename}`);
      const pathMedium = resolve(__dirname, `../../public/images/medium/${filename}`);
      const pathLarge = resolve(__dirname, `../../public/images/large/${filename}`);

      fs.unlinkSync(pathSmall);
      fs.unlinkSync(pathMedium);
      fs.unlinkSync(pathLarge);

      return true;
    } catch (error) {
      throw Boom.badRequest(error);
    }
  },
};

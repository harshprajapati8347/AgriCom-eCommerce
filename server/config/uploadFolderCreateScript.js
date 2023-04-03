const fs = require("fs");

const categoriesFolder = "./public/uploads/categories";
const customizeFolder = "./public/uploads/customize";
const productsFolder = "./public/uploads/products";

const CreateAllFolder = () => {
  if (!fs.existsSync(categoriesFolder)) {
    fs.mkdir(categoriesFolder, {
      recursive: true,
    });
  }

  if (!fs.existsSync(customizeFolder)) {
    fs.mkdir(customizeFolder, {
      recursive: true,
    });
  }

  if (!fs.existsSync(productsFolder)) {
    fs.mkdir(productsFolder, {
      recursive: true,
    });
  }
};

module.exports = CreateAllFolder;

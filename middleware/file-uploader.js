const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

const storage = new GridFsStorage({
  url: process.env.MONGODB_URI,
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      const fileName = `${Date.now()}-image=${file.originalname}`;
      return fileName;
    }

    return {
      bucket: "photos",
      fileName = `${Date.now()}-image=${file.originalname}`
    };
  },
});

module.exports = multer({storage});
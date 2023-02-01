const express = require("express");

require("dotenv").config();

const router = express.Router();
const fs = require("fs");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const upload = multer({ dest: "public/assets/images/avatar" });

router.post("/avatar", upload.single("avatar"), (req, res) => {
  // On récupère le nom du fichier
  const { originalname, filename } = req.file;
  const fileUUID = uuidv4();

  // On utilise la fonction rename de fs pour renommer le fichier
  fs.rename(
    `public/uploads/avatar/${filename}`,
    `public/uploads/avatar/${fileUUID}-${originalname}`,
    (err) => {
      if (err) throw err;
      // res.send("File uploaded");
      res.json(`${process.env.URL_UPLOAD}/avatar/${fileUUID}-${originalname}`);
    }
  );
});

// router.get("/avatar/:filename", (req, res) => {
//     const { filename } = req.params;
//     res.sendFile(path.join(__dirname, "../public/assets/images/avatar", filename));
//   });

module.exports = router;

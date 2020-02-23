const express = require("express");

const app = express();

// single file
app.post("/upload-avatar", async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: "No file uploaded"
      });
    } else {
      // use the name of the input field (i.e. "avatar")
      // to retrieve the uploaded file
      let avatar = req.files.avatar;

      // use the mv() method to place the file in
      // upload directory (i.e. "uploads")
      avatar.mv("./uploads/" + avatar.name);

      //send response
      res.send({
        status: true,
        message: "File is uploaded"
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

// multiple files
app.post("/upload-photos", async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: "No file uploaded"
      });
    } else {
      let data = [];

      //loop all files
      _.forEach(_.keysIn(req.files.photos), key => {
        let photo = req.files.photos[key];

        //move photo to uploads directory
        photo.mv("./uploads/" + photo.name);
      });

      //return response
      res.send({
        status: true,
        message: "Files are uploaded"
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

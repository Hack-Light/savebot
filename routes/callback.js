const express = require("express");
const router = express.Router();

/* GET users listing. */

router.get("/", async (req, res) => {
  let data = {
    title: "Save bot",
  };
  res.json(data);
});

module.exports = router;

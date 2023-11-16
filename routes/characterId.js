const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comics/:characterId", async (req, res) => {
  const response = await axios.get(
    `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.characterId}?apiKey=${process.env.API_KEY}`
  );
  console.log(response.data);
  res.json(response.data);
});
module.exports = router;

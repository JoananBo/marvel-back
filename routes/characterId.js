const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comics/:characterId", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.characterId}?apiKey=${process.env.API_KEY}`
    );

    console.log("hey");
    res.json(response.data);
  } catch (error) {
    console.log("erreur =>", error);
  }

  // console.log(response.data);
  // res.json(response.data);
});
module.exports = router;

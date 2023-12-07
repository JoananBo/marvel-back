const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comic/:comicId", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comic/${req.params.comicId}?apiKey=${process.env.API_KEY}`
    );
    console.log("Vous êtes sur la page comicsid");
  } catch (error) {
    console.log("erreur back=>", error);
    res.json({ message: error.message });
  }
});

module.exports = router;

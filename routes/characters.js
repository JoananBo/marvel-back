const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}&name=${req.query.name}`
    );

    console.log(response.data);

    res.json(response.data);
  } catch (error) {
    console.log("erreur", error);
    res.json({ message: "Erreur" });
  }
});
module.exports = router;

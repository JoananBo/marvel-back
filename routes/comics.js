const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comics", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}&title=${req.query.title}`
    );
    // console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.log("erreur", error);
    res.json({ message: error.message });
  }
});

module.exports = router;

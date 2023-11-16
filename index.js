const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

//-----------MES ROUTES----------------//

const charactersRoute = require("./routes/characters");
app.use(charactersRoute);

const comicsRoute = require("./routes/comics");
app.use(comicsRoute);

const characterIdRoute = require("./routes/characterId");
app.use(characterIdRoute);

//-----------ROUTE 404-----------------//

app.all("*", (req, res) => {
  res.status(404).json({
    message: "“I AM LOKI, OF ASGARD, AND I AM BURDENED WITH GLORIOUS PURPOSE.",
  });
});

//---------SERVER STARTED--------------//

app.listen(process.env.PORT, () => {
  console.log("And... I... Am... Ironman");
});

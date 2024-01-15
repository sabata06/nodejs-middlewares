"use strict";
/* -------------------------------------------------------
    EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//? Middleware functions must be has three parameters.
//? Last parameter is for next().

//*next() for next function /*

app.get("/", (req, res, next) => {
  //*req/res paramaetreleri ile bir sonraki func veri gönderebiliriz

  req.customData = "Custom data";
  res.customDataRes = "Res CUstom data";

  next(); //*go to next func

  res.send({
    message: "mw running",
  });
});

app.get("/", (req, res) => {
  res.send({
    customData: [req.customData, res.customDataRes],
    message: "welcome",
  });
});
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));

require("dotenv").config();
const express = require("express");
const loggerMiddleware = require("./loggerMiddleware");
const app = express();
const port = 8080;

app.use(loggerMiddleware);

app.get("/", function (req, res) {
  req.logger.error("Mensaje de error");
  req.logger.warn("Mensaje de warn");
  req.logger.info("Mensaje de info");
  req.logger.http("Mensaje de http");
  req.logger.verbose("Mensaje de verbose");
  req.logger.debug("Mensaje de debug");
  req.logger.silly("Mensaje de silly");
  res.send("Logs realizados");
});

app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto ${port}`);
});

const express = require("express");
const cors = require("cors");
const http = require("http");

//routes
const attendance = require("./routes/attendance");

const app = express();
app.use(cors());
app.use(express.json());

// Archivos estaticos
app.use(express.static("static"));

// routes
app.use("/attendance", attendance);

//Agarramos el Puerto de los datos del ENV
const PORT = process.env.PORT || "3000";
// Seteamos el puerto que vamos a utilizar
app.set("port", PORT);
// Creamos una instancia HTTP
const server = http.createServer(app);
// Levantamos el servidor
server.listen(PORT);

module.exports = app;

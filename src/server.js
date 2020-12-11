import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./app.jsx";

const app = express();

app.use(express.static("dist"));
app.get("*", (req, res) => res.send(renderToString(<App path={req.path} />)));

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
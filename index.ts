import express from "express";
import fs from "fs";
import path from "path";

const port = 3000;
const app = express();
const rootDir = __dirname.replace(/\\/g, "/").replace("/js", "");

app.use(express.json());
app.use(express.static("clients/public"));
app.get("/", (req, res) => {
    res.sendFile(path.join(rootDir, "clients/public/main.page.html"))
    });
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
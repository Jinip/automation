const express = require("express");
const app = express();
const path = require("path");
const gcal = require("./googleapi/gcalendarapi");

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.render("index.html");
})

app.get("/listEvents", async (req, res) => {
    res.send(gcal.getEvents());
})

app.listen(3000, () => console.log("running on 3000"));

const express = require("express");
const routing = express.Router();
const noteController = require("../controller/myNotes");
const packageController = require("../controller/packageController");
routing.use((req,res,next)=> {
    console.log(`Req method is ${req.method}`);
    console.log(`Req url is ${req.url}`);
    next();
})
routing.post("/add-notes", noteController.newNotes);
routing.get("/packages", packageController.getPackages);
routing.post("/bookpackage", packageController.bookPackage);
routing.all("*", packageController.allPackages);
module.exports = routing;

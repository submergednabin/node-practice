const mongoose = require("mongoose");
const myNotesSchema = require("./myNotes");
const Model = mongoose.model("mynotes", myNotesSchema);
module.exports = Model;

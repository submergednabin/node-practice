const Model = require("../model/noteModel");
// exports.getNotes = async (req,res) => {
//     try{
//         res.status(200).json({
//             message:'you can now get the reqested notes for your request',
//         });
//     }catch(err){
//         res.status(404).json({
//             status:'fail',
//             message:err,
//         });
//     }

// };

// exports.newNotes = async (req,res) => {
//     try{
//         res.status(201).json({
//             data:'New notes added for the post request',
//         });
//     }catch(err){
//         res.status(404).json({
//             status: 'fail',
//             mesage: err,
//         });
//     }
// };

exports.invalid = async (req, res) => {
  res.status(404).json({
    status: "fail",
    message: "Invalid path",
  });
};

exports.newNotes = async (req, res) => {
    console.log("here")
  try {
    console.log("here in new notes");
    const noteObj = {
      notesID: 7558,
      name: "Nabin",
      data: "Mongo Atlas is very easy to config and use",
    };
    const newNotes = await Model.create(noteObj);
    res.status(201).json({
      status: "success",
      message: "Successfully Inserted.",
    });
    console.log(newNotes);
  } catch (err) {
    console.log(err.errmsg);
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getNotes = async (req, res) => {
  try {
    const notes = await Model.find({}, { _id: 0, _v: 0 });
    if (notes.length > 0) {
      console.log(notes);
    }
  } catch (err) {
    console.log(err.errMsg);
  }
};

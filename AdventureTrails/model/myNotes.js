const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/inventory',{
 useNewUrlParser: true,
 useUnifiedTopology: true,
}).then(()=>{
    console.log("DB Connection successful")
});
const myNotesSchema = new mongoose.Schema(
  {
    notesID: {
      type: Number,
      unique: true,
      required: [true, 'Required Field'],
    },
    name: {
      type: String,
      required: [true, 'Required Field'],
    },
    data: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

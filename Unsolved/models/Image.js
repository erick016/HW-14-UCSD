var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var ImageSchema = new Schema({
    // `location` is required and of type String
    location: {
      type: String,
      required: true
    }
  });

  var Image = mongoose.model("Image", ImageSchema);

// Export the Image model
module.exports = Image;
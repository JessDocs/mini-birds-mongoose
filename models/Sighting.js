var mongoose = require('mongoose');

var sightingSchema = new mongoose.Schema ({ 
  name: { type: String },
  order: { type: String, lowercase: true, maxlength: 20 },
  status: { type: String, lowercase: true, enum: [
      'extinct',
      'extinct in the wild',
      'critically endangered',
      'endangered',
      'vulnerable',
      'near threatened',
      'conservation dependent',
      'least concern'
    ]
  },
  confirmed: { type: Boolean, },
  numberSeen: { type: Number, min: 1 },
  

});
var collectionName = "user";
module.exports = mongoose.model("user", sightingSchema, collectionName);

const mongoose = require('mongoose');
const peopleSchema = new mongoose.Schema({
        age:
            {
             type:String,
             required:false,
            },
        name:  
        {
            type:String,
            required:false,
           },
        gender:  
        {
            type:String,
            required:false,
           },
        email:  
        {
            type:String,
            required:false,
           },
        favoriteFruit:  
        {
            type:String,
            required:false,
           },
      });

const People = module.exports = mongoose.model('people', peopleSchema);
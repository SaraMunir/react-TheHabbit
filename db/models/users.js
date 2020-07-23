const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let users = new Schema ({
   name : { 
      type: String,
      trim: true,
      required: true
   },
   email : { 
      type: String, 
      required: true, 
      trim: true, 
      match: [/.+@.+\..+/, 'Please enter a valid e-mail address'] 
   },
   password :  { 
      type: String, 
      required: true, 
      trim: true
   },
   profileImg: {
      type: String,
      default: 'https://getdrawings.com/free-icon-bw/anonymous-avatar-icon-19.png'  
   },
   bio: {
      type: String,
      default: 'Tell the world something about yourself'  
   },
   challenge: [
      { 
         challengeId: {type: String},
         task: [
            {
                taskId: {type: String},
                taskText: {type: String},
                completed: {type: Boolean},
            }
         ],
         completed: {type: Boolean},
         picture: {type: String}
      }
   ]
 }, {
    timestamps: true
 });

module.exports = mongoose.model('users', users);

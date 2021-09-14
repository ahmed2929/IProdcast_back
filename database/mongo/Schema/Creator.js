const  mongoose =require ('mongoose');

const schema   = mongoose.Schema;

const Creator = new schema({
     
    name:{
        type:String,
        required:true
    },
    password: {
        type: String,
        required:true
  },
    email:{
        type:String,
        required:true
    },
    photo:{
      type:String,
      default:'https://img.icons8.com/bubbles/50/000000/user-male.png'
    },
    
   
    


});

module.exports = mongoose.model('Creator',Creator);

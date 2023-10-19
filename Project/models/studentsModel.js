const mongoose = require('mongoose');
const Joi = require('joi');

const studentSchema = new mongoose.Schema({
    name : {type : String , required : true , minlength : 2 , maxlength : 30},

    lastname : {type : String, required : true, minlength : 5, maxlength : 30},

    isEnrolled: {
      type : Boolean,
      default : false
    },
    Phone: {
      type : String,
      required : true,
      minlength : 10,
      maxlength : 20
    }
})

const Student = mongoose.model('Student' , studentSchema)




function validateData(student){
    const schema = {
       name : Joi.string().min(2).max(30).required(),
       lastname : Joi.string().min(5).max(30).required(),
       Phone : Joi.string().min(10).max(20).required(),
       isEnrolled : Joi.boolean()

    }
    return Joi.validate(student , schema)
}


exports.Student = Student
exports.validate = validateData



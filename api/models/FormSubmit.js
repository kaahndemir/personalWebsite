const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const FormSubmitSchema = new Schema({
  fullName:String,
  emailAddress:String,
}, {
  timestamps: true,
});

const FormSubmitModel = model('FormSubmit', FormSubmitSchema);

module.exports = FormSubmitModel;
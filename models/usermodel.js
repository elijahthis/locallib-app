const mongoose=require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    first_name: {
        type: String,
         required: true,
          maxLength: 100},
    last_name: {
        type: String,
         required: true,
          maxLength: 100},
    username: {
        type: String,
         required: true,
          maxLength: 100},      
    email: {type: String,
     required: true,
      maxLength: 50},
    password: {
        type: String,
         required: true,
         minlength:8,
          maxLength: 20},
    tel: {
        type: Number,
         required: true,
          maxLength: 20},
    date_of_birth: {
        type: Date}
  }
);
userSchema
.virtual('name')
.get(function () {
// To avoid errors in cases where an author does not have either a family name or first name
// We want to make sure we handle the exception by returning an empty string for that case
  var fullname = '';
  if (this.first_name && this.last_name) {
    fullname = this.last_name + ', ' + this.first_name
  }
  if (!this.first_name || !this.last_name) {
    fullname = '';
  }
  return fullname;
});
userSchema
.virtual("pass")
.get(()=>{
    return this.password;
});
userSchema
.virtual("url")
.get(()=>{
    return '/user/' + this._id;
});
module.exports = mongoose.model('User', userSchema);






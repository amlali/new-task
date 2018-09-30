const mongoose = require('mongoose');
const bcrypt=require('bcrypt');
const ObjectID = require('mongodb').ObjectID
 
var option={
    useNewUrlParser: true
};
mongoose.Promise    = global.Promise;
mongoose.connect('mongodb://localhost:27017/form-app',option);
console.log('inside user model');
const Schema = mongoose.Schema;
var User=new Schema({
   // _id={
     // type:object
    //},
    username:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'user'
    },
    phone:{
        type:Number
    }

});
User.methods.generateHash=function (password) {
    var sult=bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password,sult);
}

User.methods.addUser=function(obj){
   // this._id=new ObjectID();
   console.log('inside user creation methods.. trying to add obj = >  ' , JSON.stringify(obj));
    this.username=obj.username;
    this.email=obj.email;
    this.password=this.generateHash(obj.password);
    this.phone=obj.phone;
     
}

User.method.setUser=function(obj){
    this.email=obj.email;
    this.password=obj.password;
}
User.methods.isValidPassword=function(password){
    console.log(`password is:${password},hash:${this.password}`)
  return bcrypt.compareSync(password, this.password);
}
//User.methods.getTicketData=function(){
  //  var data={
    //    _id=this._id,
      //  role=this.role
    //};
    //return data;
//}

module.exports = mongoose.model('User', User);
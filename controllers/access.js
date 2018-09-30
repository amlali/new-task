var User=require('./../models/user');
const uCheck=require('ucheck');
module.exports={
signUp:function(){
return function(req,res,next){
var x=[{
    param: 'username',
    label: 'Username',
    required: true,
    type: 'string',
    length: { min: 3 , max: 20},
    regex: /^[A-Za-z]{3,20}$/
},

{
    param: 'email',
    label: 'Email',
    required: true,
    type: 'string',
    regex:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
},
{
    param: 'password',
    label: 'Password',
    required: true,
    type: 'string',
    length: { min:8, max: 20},
    regex: /^[A-Za-z0-9_-]{8,20}$/
},
{
    param: 'phone',
    label: 'Phone',
    type:Number,
    regex: /^[0-9]{11}$/

}];

let ucheck = new uCheck.validate(req).scenario(x);
if(ucheck.hasErrors()){
    res.status(400).send({error: ucheck.getErrors()});
    return false;
}
else{
    var user=new User();
    User.findOne({email:req.body.email}).then((res)=>{
        if(!res)
        {
            var newUser={
                username:req.body.username,
                email:req.body.email,
                password:req.body.password,
                Phone:req.body.Phone
            };
            console.log('not Exist Email before add user ')
            user.addUser(newUser);
            user.save();
            return  res.status(200).send(user);
        }
        else{
            return res.send('this Email Exists');
        }

    }).catch(()=>{
        return  res.status(404).send();


    });
    

}

}}


}
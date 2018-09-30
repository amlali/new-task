var signup=require('../router/routes/signup');
var signin=require('../router/routes/signin');

module.exports=function(app){
    app.use(signup);
    app.use(signin);

}

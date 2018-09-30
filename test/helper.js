
let DateGenerator = require('random-date-generator');


      function generate(opt, length){

        var text     = "";
        var possible = [];

        switch(opt) {
            case 'lalpha':
                possible = ["abcdefghijklmnopqrstuvwxyz"];
                break;
            case 'ualpha':
                possible = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
                break;
            case 'all-alpha':
                possible = [
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                    "abcdefghijklmnopqrstuvwxyz"];
                break;
            case 'numeric':
                possible = ["0123456789"]
                break;
            case 'mix':
                var possible = [
                    "@$!%*?&",
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                    "abcdefghijklmnopqrstuvwxyz", 
                    "0123456789"
                  ];
                break;
            default:
                return false;
        }
        var x = 0;
        for( var i=0; i < length; i++ ){
            if(x==(possible.length)){x=0;}
            text += possible[x].charAt(Math.floor(Math.random() * possible[x].length));
            x++;
        }
        return text;
    }
    
    function check_Date(){

        DateGenerator.getRandomDate(); // random date
        return DateGenerator;
           
    }
      function generateUser () {
            return {
                username:generate('lalpha',10),
                mobilenumber:generate('numeric',11) ,
                email: generate('lalpha', 20) + "@gmail.com",
                password:generate('mix',15)         
            }
        }

           function generateForm() {

            let date = new Date(2018, 3, 2);
            return {
                school:generate('lalpha',20),
                No_ofClasses:generate('numeric',50) ,
                studentNumber:generate('numeric',50) ,
                visitDate:check_Date(date),
                state:{
                    acceptable:'acceptable' ,
                    notAcceptable:'notAcceptable'}

            }
        }
function signInUser () {
            return {
                email: generate('lalpha', 20) + "@gmail.com",
                password:generate('mix',15)         
            }
        }

        module.exports={
            generateForm,generateUser,check_Date,generate,signInUser

        }
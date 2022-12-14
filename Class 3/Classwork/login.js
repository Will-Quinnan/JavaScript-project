// global variables (database)
let dbUser = "admin"
let dbPass = "password"

function login(){
    //get name and pass from user
    let username = prompt("Enter your username")
    let password = prompt("Enter your password")

    console.log(username,password);
    //compare the name and pass with database values
    if(username==dbUser && password==dbPass){
        //display login successs
        document.getElementById("login-result").innerHTML=`<h2>Welcome to the admin site!</h2>`;
    }else{
        //display login success HTML
        document.getElementById("login-result").innerHTML=`<p>Invalid credentials. Please try again</p>`;
    }

 }

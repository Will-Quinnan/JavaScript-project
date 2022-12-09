console.log("Script File");
// let userName= prompt(" Enter username");
// let userEmail= prompt(" Enter email");
// let userPassword= "helllo";
// let userAge=25;
// let userCountry= "US";
// let salaryMonthly= prompt(" Enter monthly Salary");
// let salaryAnnual=(salaryMonthly *= 12); //shorthand is *12
// document.write(`
// <p> My name is ${userName} </p>
// <p> My email is ${userEmail} </p>
// <p> I make $${salaryAnnual} a year </p> 
// `);

//Creating funtions

// function declaration
// function greeting(){
    //body of function
    // console.log("Hello");
    // alert("Welcome")
    // document.write("Merry Christmas")
//     return "Will";
// }
//global variable
// let global;;

// function sum(a,b){
    //local variable
//     return a+b;
// }

// console.log(sum(10,50));
// console.log(global);

//function expression
// let displayValues = function(){
//     console.log("Displaying Values . . .")
// }
// displayValues();

//arrow function
// let traveling = country => "Traveling to ..." + country;

// travel = traveling("Italy")
// console.log(travel);

let total=0;
    function addCart(price){
        total = total + price;
        console.log(total);
        return total;
    }

function calculateTaxes(){
    subtotal=addCart(2);

    let totalTax = subtotal *1.11;

    
    document.getElementById("receipt")
    innerHTML=
    `
        <p> Subtotal = ${subtotal} </p>
         <p> Total = ${totalTax} </p>`;
}
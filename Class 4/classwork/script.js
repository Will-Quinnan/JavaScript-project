// creating the array
let gpas = [2.2,3,1.2,3.3,4,3.5,1.5]
// console.log(gpas);
// console.table(gpas)

function register(){
    let newGPA= Number(document.getElementById("gpa-input").value);
    gpas.push(newGPA);
    displayGPAS();
}

function displayGPAS(){
    //get the HTML element
    const DIV = document.getElementById("users-gpas");
    let tmp="";
    //travel the array
    for(let i=0;i<gpas.length;i++){
        console.log(gpas[i]);
    
    //create the tmp (HTML)
    if(gpas[i]<2){
        tmp+=`

        <p style="color:red;">${i} --> ${gpas[i]} FAIL </p>`;
    }
    else if(gpas[i]>=3.5){
        tmp+=`

        <p style="color:green;">${i} --> ${gpas[i]} </p>`;
    }
    else{
        tmp+=`

        <p style="color:black;">${i} --> ${gpas[i]}</p>`;
    }

    console.log(tmp);
    DIV.innerHTML=tmp;

    //insert the tmp on the HTML
    }
}
displayGPAS();

//function register(){
//     let newGPA= Number(document.getElementById("gpa-input").value); // getting the newGPa from the input
//     gpas.push(newGPA); // adding the newGPA to the array
//     displayGPAS(); // display the newGPA
//  }
 
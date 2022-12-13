function calculate(){
    let x = prompt("first number");

    let operation = prompt("operation");

    let y = prompt("second number");

    let zSum = Number(x) + Number(y);
    let zDif = x-y;
    let zPro = x*y;
    let zQuo = x/y;
    console.log(zSum,zDif,zPro,zQuo);

    if(operation=="+"){    
    document.getElementById("calculator").innerHTML=
    `
    ${x}${operation}${y}=${zSum}
    `;
        console.log(x,operation,y,zSum);
    }
    
    else if(operation == "-"){    
    document.getElementById("calculator").innerHTML=
    `
    ${x}${operation}${y}=${zDif}
    `;
        console.log(x,operation,y,zDif);
    }
    
    else if(operation == "*"){    
    document.getElementById("calculator").innerHTML=
    `
    ${x}${operation}${y}=${zPro}
    `;
        console.log(x,operation,y,zPro);
    }
    
    else if(operation == "/")   {
    document.getElementById("calculator").innerHTML=
    `
    ${x}${operation}${y}=${zQuo}
    `;
        console.log(x,operation,y,zQuo) ;
    }

}
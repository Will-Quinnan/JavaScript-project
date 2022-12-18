
let item = ["things to do"]

let newItem= document.getElementById("toDo");

function add(){
   
    item.push(newItem.value);
    displayToDo();
    console.log(newItem.value);
    clearForm();
}


function displayToDo(){

    const DIV = document.getElementById("toDoList");
    let tmp="";

    for(let i=1;i<item.length;i++){
        console.log(item[i]);

        
        tmp+=`
        
        <p>${i}.${item[i]}</p>
        
        `;

        console.log(tmp);
        DIV.innerHTML=tmp;

       

    }
}
function clearForm(){
    newItem.value=""
}


displayToDo();

let item = ["things to do"]



function add(){
    let newItem= document.getElementById("toDo");
    item.push(newItem);
    displayToDo();
    console.log(newItem)
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


displayToDo();
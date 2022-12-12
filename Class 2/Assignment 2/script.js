let name = prompt("Please Enter your name.");
let qty = Number (prompt("How many fruit would you like?"));
let qty2 = Number (prompt("How many choclates would you like?"));
let price = .5;
let price2 = .75;
console.log (name,qty,qty2);
let fPrice = (qty *.5);
let cPrice = (qty2 *.75);
console.log (fPrice, cPrice);
document.getElementById("cart").innerHTML=
`
<h2>Cart</h2>
<p> Thank you ${name} </p>
<p> QTY___Item____$Each___Total
<p> ${qty}______Fruit_____$${price}__$${fPrice}</p>
<p> ${qty2}______Choco___$${price2}__$${cPrice}</p>`;

let subtotal=0;
    function calculateTotal(){
        subtotal = fPrice + cPrice
        console.log(subtotal)
        let total =subtotal*1.11
        console.log (total)
        document.getElementById("receipt").innerHTML=
    `
    <p> Subtotal=$${subtotal} </p>
    <p> Total=$${total} </p> `;
}


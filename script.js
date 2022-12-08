console.log("Script File")
var age=100;//initialization ans assignation
let userName="Will";
let taxes = 11.5;
const URL = "http://www/thisisprivateEndPoint/project"

console.log(age,username,URL);//displaying the age, username and URL

//addextra notes using the comments
userName="Edward"; //changing the username value
taxes=12;//changing the taxes value
console.log("my user is" + username + URL);// displaying the username and URL
//EX!: Store the foloowing variables: numberof children, partner's
//name, geographical location, job title.
let numberOfChildren = 0;
let partnersName = "Robert";
let jobTitle = "Software Engineer"

//concatenation

// document.write("<p>You will be a " + jobTitle + " in " + geoLocation + " and married to " + partnersName + "  with " + numberOfChildren + "kids</p>");

// template string
document.write(`
<p> You will be a ${jobTitle} </p>
<p> in ${geoLocation}, and married to ${partnersName} </p>
<p> with ${numberOfChildren + 1} kids</p>
`)
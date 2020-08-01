// save output to variable as an Object (not the Promise)

const fetch = require('node-fetch');

// Example 1
var obj;
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.json())
  .then(data => obj = data)
  .then(() => console.log(obj))
  
// Example 2
let jsondata;    
let url = "https://jsonplaceholder.typicode.com/posts/1"
fetch(url)
  .then(
    function(u){ return u.json();}
  ).then(
    function(json){
    jsondata = json;
    console.log(jsondata);
    }
  )  

// NOTES
// https://stackoverflow.com/a/45018619
// https://stackoverflow.com/a/48474982

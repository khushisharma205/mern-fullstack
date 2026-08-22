import React from "react";
import { createRoot } from "react-dom/client";
const rootelement = document.getElementById("root");
const root = createRoot(rootelement);
const name="book";
const admin=false;
const user="brijesh"
const css = { color:"red",
    backgroundColor:"blue",
    fontSize:"30px",



 };
 const info={
    class:"mca",
    address:"patna"
 };
 const array=[1,2,3,4,5,6,7,8,9,10]
//now we have provide jsx syntax
const heading = <h1>hello world</h1>;
let element = (
  <div style={css}>
    <h1>name:{name}</h1>
    <h2>class:{info.class}</h2>
    <h3>address:{info.address}</h3>
   {

    array.map(value=>(
        <li key={value}>{value}</li>
    ))
   }
   
{admin?<h1>this is admin</h1>:<h1>this is user:{user}</h1>}
   
  </div>
);
const isloggedin=false;
if(isloggedin)
{
    element=<h1>wecome {user}</h1>
}
else{
    element=<h1>please login</h1>
}
root.render(heading);
root.render(element);

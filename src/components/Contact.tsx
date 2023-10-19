"use client"
import { useState } from "react"


export default function Page(){
 
     const [name, setName] = useState("");
 
      const [age, setAge] = useState("");
 
      const [phone, setPhone] = useState("");
}
// const addUser = async()=>{
    // let respone = await fetch("http://localhost:3000/api/userinfo",{
        // method:"POST",
    //    headers: {
                //  "Content-Type": "application/json",
            //    },
            //    body: JSON.stringify({ name,  }),
    // });
    // console.log("body-------------");
    // respone = await respone.json();
    // console.log(respone);
// 
    // return(
        // <button className='border rounded'text->Delete</button>
    // )
// }

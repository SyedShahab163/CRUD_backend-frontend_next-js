"use client"
import {useState} from 'react'
import './../app/globals.css'

export default function Cont(){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    // const [phone, setPhone] = useState("");

    const addUser = async()=>{
        let respone = await fetch("http://localhost:3000/api/userinfo",{
            method:"POST",
           headers: {
                     "Content-Type": "application/json",
                   },
                   body: JSON.stringify({ name, age  })
        });
        console.log("body-------------",respone);
        
        //   respone = await respone.json();
        
        console.log('---response----',respone)
        console.log()
        console.log(respone.status,"00000000000000000000000000" )
  
          if(respone.status == 200){
            console.log(respone.status,"---------------------" )
                 alert("your data  is successfully saved")
          }else{
          alert(" your data have not saved")
         }
        // console.log(respone)
    }
        return(
           <div className=''> 
            <h1 className='add-user  font-serif text-center'>Useradd</h1>
   <input  className="input-field text-center"type='text' value={name} placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}></input> 
   <input className=" font-serif text-center"type='text' value={age} placeholder='Enter age' onChange={(e)=>setAge(e.target.value)}></input> 
            <button  onClick={addUser} className='btn text-center'>Add</button>

           </div>
        )


}

   
// export default Cont










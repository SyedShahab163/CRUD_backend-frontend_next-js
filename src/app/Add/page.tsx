"use client"
import {useState} from 'react'
// import '@/app/'
import Link from 'next/link';
import '../../app/globals.css'
import { Form } from 'react-router-dom';
import Page from '../user/[userid]/page';

export default function Cont(){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    // const [phone, setPhone] = useState("");

    const addUser = async()=>{
        let respone = await fetch("http://localhost:3000/api/v2",{
            method:"Post",
           headers: {
                     "Content-Type": "application/json",
                   },
                   body: JSON.stringify({ name, age  })
        });
   
        respone = await respone.json()
        console.log(respone);
          // if(respone.status == 200){
            // console.log(respone.status,"---------------------" )
                //  alert("your data  is successfully saved")
          // }else{
          // alert(" your data have not saved")
        //  }
        console.log(respone)
           }
        return(
            <div className='add-user'>
                                     <h1>Add New User</h1>
                <input type="text" placeholder="Enter Name"onChange={(e)=>setName(e.target.value)} className="input-field text-center"></input>
                <input type="text" placeholder="Enter age"onChange={(e)=>setAge(e.target.value)}value={age} className="input-field text-center"></input>
                <button  onClick={addUser} className='btn'>Add</button>
                <br/>
                <span><Link className='btn'href={`/user`}>back to Home</Link></span>  
            </div>
        )


}

   
//  export default Cont










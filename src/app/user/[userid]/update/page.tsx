  "use client"
 import {useEffect, useState} from 'react'
import '@/app/globals.css'
import { Result } from 'postcss';
import { NextResponse } from 'next/server';
 export default  function Page({params}){
    let id = params.userid 
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    console.log(params.userid,"-----------------")
    
    // useEffect(()=>{
    // getUserDetials()
    //  },[])
    console.log('=============before useeffect')

    // useEffect(() => {
            
    const getUserDetials  =async()=>{
     console.log("44444444444444444444444444444444444")
    let data = await fetch("http://localhost:3000/api/v2/" + id);
    // console.log(data,"00000000000",id)
         data = await data.json();
        //  data = await data.json(); 
         setName(data["users"]["name"])
         setAge(data["users"]["age"])
        console.log(data,"%%%%%%%%%%%%%%%5",data)
        console.log(data["users"]["name"],":::::::::::::::::::")
        // const age1 = 
       
            console.log(data,"=========data###___+++====---------------------------=========================")    
    //    setName(data.)
     };

      getUserDetials();
     console.log('=============in called')

//   }, [id]);
//   const a = getUserDetials();
// 
   const updateUser = async()=>{
   let result = await fetch("http://localhost:3000/api/v2/"+id,{
    method:"PUT",
     body:JSON.stringify({name,age})
   })
       result = await result.json()
      console.log(result,"=============result=============");
   }
    return(
        <div className="font-serif text-lg">
            <h1>update User Detials</h1>
<input className="input-field" type="text" placeholder="Enter Name"onChange={(e)=>setName(e.target.value)}value={name} ></input>
<input className="input-field" type="text" placeholder="Enter age"onChange={(e)=>setAge(e.target.value)} value={age} ></input>
               <button className='btn' onClick={updateUser}>update user</button>
        </div>
    )
 }




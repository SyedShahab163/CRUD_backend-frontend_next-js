//  "use client"
// import {useState} from 'react'
// import './../app/globals.css'
 
// import User from './Post';

// export default function Home1(){
//       const data = user
//     // const [name, setName] = useState("");
//     // const [age, setAge] = useState("");
//     const addUser = async()=>{
//         let  respone = await fetch("http://localhost:3000/api/v1",{
//             method:"GET",
            
//         })
//                console.log("com---------------------",respone)
//                let userdetail = data
//                respone = await respone.json();
//     }
//         return(
//             <div>
                
//             <button  onClick={addUser}  className='btn'>Add</button>
        
//              </div>
    
//         )


// }

   
// import { user } from '@/utils/db';
import Link from 'next/link';
async function getUsers(){
 let data = await fetch("http://localhost:3000/api/v2");
  data = await data.json(); 
    return data;
}

export default async function Home1(){
     const  data = await getUsers();
    //  console.log(user)
    const data2 = data['users']
    // const data = [
        // {
            // id:1,name : "shahab"
        // },
        // {
            // id:1,name : "shahab"
        // },  {
            // id:1,name : "shahab"
        // }
    // ]
    var date = new Date();
var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
    return(
        <div className="font-serif text-lg text-center" >
            <h1 className=" font-semiboldtext-lg mt-5 border border-slate-300 ...">USER LIST</h1>   
            <h1 className="font-serif text-lg text-center">{current_time}</h1>
      
 <table className=' text-center mt-5 border-separate border-spacing-2 border border-slate-400 ...'>
<thead>
    <tr>
        <th className='border border-slate-300 ...'>id</th>
        <th className=' border border-slate-300 ...'>name </th>
        <th className=' border border-slate-300 ...' >age</th>
    </tr>
</thead>
<tbody>
{
    data2.map((item,index)=>(
     <tr key={index} >
      <td className='border border-slate-300 ...'>{item.id}</td>
        <td className='border border-slate-300 ...'>{item.name}</td>
        <td className='border border-slate-300 ...'>{item.age}</td>
     </tr>
     ))
 }
</tbody>
</table>
       
       
       
       
       
        </div>
    )
}






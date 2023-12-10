// import { DELETE } from '../app/api/v2/[id]/route';
"use client"
export default function DeleteUser(props)  {
    const userid = props.id;
    // console.log(userid,"delete api is not working")

     const deleteuser=async()=>{
      let res = await fetch("http://localhost:3000/api/v2"+userid,{
        method:"delete"
      });
      res =await res.json()
     }
    return <button onClick={deleteuser} className='btn'>DELETE</button>

}
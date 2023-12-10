//  "use client"
import Link from 'next/link'
 import { user } from '@/utils/db';
async function getUsers(id) {
    let data = await fetch(`http://localhost:3000/api/v2/${id}`);
    data = await data.json(id); 
      return data.users
// console.log(data.users,"+++++++++++++++++++")
}
// console.log(data.users,"+++++++++++++++++++")
// console.log(data,"++++++++++++++++++++++++++++++++")
export default async function Page({params}){

    let id = params.userid
    let data = await fetch(`http://localhost:3000/api/v2/${id}`);
     data = await data.json(); 
     console.log(data)
    
    const Detial = data["users"]
    const w = data.userDetails
    //  console.log(Detial,'00000000000000data.userDetial0000000000000',data.users,)
return(
    <div className='text-center mt-10'>
      <h2 className="font-serif text-lg text-blue-600">User Detial</h2>
    
    
    
 
          <div>
          <h1 className="font-serif text-lg">Name: {JSON.stringify(Detial.name)}</h1>
        
          <h4 className="font-serif text-lg">ID: {Detial.id}</h4>
          <h4 className="font-serif text-lg">Age: {Detial.age}</h4>
          
          {/* <button class="  bg-indigo-500 rounded-lg border-4 border-indigo-600...">Add</button> */}
          {/* <Button type="button" color="info">Info</Button> */}
          <br/>
          <Link className='btn' href='/user'>Add</Link>
        </div>
      {/* <h4>Name: {user}</h4>*/}
      {/* <h4>Name: {user.name}</h4>*/}
      {/* <h4>Name: {user.name}</h4>*/}
      {/* <h4>age: {user.age}</h4>*/}
      {/* <h4>Name: {user.name}</h4>*/}
      {/* console.log({user.id});*/}
    </div>
    
)
console.log(Detial.name,"555555555555555555555555555")

}
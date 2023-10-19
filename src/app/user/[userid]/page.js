// import Userlist from "./Userlist";
import { user } from '@/utils/db';
async function getUsers(id) {
    let data = await fetch(`http://localhost:3000/api/userinfo/${id}`);
    data = await data.json(); 
          // console.log(data,"''''''''''''data''''''''''''''''''",data.userDetial);
      return data.userDetial;
}
// console.log(data,"-------------------------------------------");
export default async function Page({params}){
    // console.log(params,"============params=====================");
 // console.log(params.userid,"111111111111111111111111", getUsers(params.userid))
// const user =  getUsers(params.userid)
    let id = params.userid
    let data = await fetch(`http://localhost:3000/api/userinfo/${id}`);
     data = await data.json(); 
    //  console.log(data.userDetial,"0000000000000000000000000000000",data.userDetial.name)
    const Detial = data.userDetial
    // const data = user
    // console.log(data,"22222222222222222222",typeof Detial)
    // console.log(params.userid,name,id,age,"''''''''''''''''''''''''''''''","data");
return(
    <div className='text-center mt-10'>
      <h2 className="font-serif text-lg text-blue-600">User Detial</h2>
      {/* <h1>{da}</h1> */}
      {/* { */}
        {/* // user.map((user)=>( */}
 
          <div>
          <h1 className="font-serif text-lg">Name: {JSON.stringify(Detial.name)}</h1>
          <h4 className="font-serif text-lg">ID: {Detial.id}</h4>
          <h4 className="font-serif text-lg">Age: {Detial.age}</h4>
          {/* <p>Name: {data.id}</p> */}
          {/* <p>Age: {data.age}</p> */}
        </div>
        {/* // )) */}
      {/* // } */}
    
    
    
    
    
        {/* <h4>Name: {user}</h4> */}
        {/* <h4>Name: {user.name}</h4> */}
      {/* <h4>Name: {user.name}</h4> */}
      {/* <h4>age: {user.age}</h4> */}
      {/* <h4>Name: {user.name}</h4> */}
      {/* console.log({user.id}); */}
    </div>
)
}
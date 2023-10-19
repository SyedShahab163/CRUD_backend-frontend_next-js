// import UserDetial from './UserDetial';
import { user } from '@/utils/db';
import Link from 'next/link';
async function getUsers() {
    let data = await fetch("http://localhost:3000/api/userinfo");
    data = await data.json(); 
      return data;
  
}
export default  async function Userlist(){
    const  data = await getUsers();
    return(
        <>
            <h1>User List</h1>

    <div>
         <ul>   
             {user.map((item)=>( 
               <li key={item.id} >
                   {/* <a href='/user'>ID:{item.id}</a>, */}
                   <Link href={`user/${item.id}`}>{item.name}</Link>
                   {/* {item.name}, */}
                   {/* {item.age}, */}
                   <a >---DELETE</a>
                </li>
    
           ))}    
        </ul>
     </div>
        </>
    )
}
// import { map } from 'rxjs/operators';

import Link from 'next/link';
import '../../app/globals.css'
import DeleteUser from '@/lib/DeleteUser';
import { user } from '../../utils/db';
async function getUsers() {
    // let data = await fetch("http://localhost:3000/api/userinfo");
    let data = await fetch("http://localhost:3000/api/v2");
     data = await data.json(); 
    // console.log(data,"-------------data--------------",data)
      return data
  console.log(data)
}
export default  async function Userlist(this:any){
    // let grow = user
    const  data = await getUsers();
    const data2 = data['users']

     return(
        <>
            <h1 className="font-serif text-lg text-center">User List</h1>
<br></br>
    <div className="font-serif text-lg text-center">
         <ul className="font-semiboldtext-lg mt-5 border border-slate-300 ...">  
      
              {data2.map((item)=>( 
               <li key={item.id} >
                  <div className='user-item'>
                   <Link href={`user/${item.id}`}>{item.id}-{item.name}</Link>
                   <span> <Link href={`user/${item.id}/update`}>Edit</Link></span>
                   <DeleteUser id={item.id} className="btn"/>    
                   </div>
                   {/* {item.name}, */}
                   {/* {item.age}, */}
                   {/* <a >---DELETE</a> */}
                </li>
           )
           )
        
           }    
        </ul>

     </div>
        </>
    )
}
import { NextResponse } from "next/server";
import { getUserByid,userUpdateById,userRemoveById } from "@/lib/data";
 import { user } from "@/utils/db";


 export const GET = async (req:Request, res:Response)=>{
    // console.log('------------calling Get ID api-----------')
    //   const data = user

  try {
        const id = req.url.split('v2/')[1];
         const users = getUserByid(id);
        //  console.log( users,"))))))))))))))))))))))")
        return NextResponse.json({
            result:"OK",
            users
        },
        {
            status:200
        }) 
        
    } catch (error) {
      return NextResponse.json({
     error
      },
      {
     status:500
      })        
     }
 } 
 export const PUT = async(req:Request,res:Response)=>{
    try {
        const id = req.url.split('v2/')[1];
        const {name,age } = await req.json()
        userUpdateById(id,name ,age)
        const userDetial = getUserByid(id);
        return NextResponse.json({
            Result:"OK",
            // results:"false",
            res:"user data succeffuly updated",
              userDetial
        },
    
        {
            status:200
        })
    } catch (error) {
        NextResponse.json({
            error
        },
        {
            status:500
        })
    }
     console.log("PUT","===================================")
 }
// export async function PUT(request ,content){
    // let payload = await request.json();
    // let userId = content.params.id;
    // console.log(payload);
    // if(!payload.id ||!payload.name ||!payload.age){
// 
        // return NextResponse.json({result:"data is not vaild",success:false},{status:400})
    // }
// 
    // return NextResponse.json({result:payload,success:true},{status:200})
// }
 export const DELETE = async (req:Request,res:Response)=>{
    try {
    
            const id = req.url.split('v2/')[1];
            userRemoveById(id);
            return NextResponse.json({
                message:"OK",
                res:"user info RemoveSucces fully"
            })
    } catch (error) {
        NextResponse.json({
            error
        },
        {
            status:200
        })
    }
    console.log("PUT","===================================")
 }
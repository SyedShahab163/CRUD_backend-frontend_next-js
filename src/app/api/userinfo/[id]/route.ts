// import { NextResponse } from "next/server";
// import { getUserByid,userUpdateById,userRemoveById } from "@/lib/data";
//  import { user } from "@/utils/db";


//  export const GET = async (req:Request, res:Response)=>{
//     console.log('------------calling Get ID api-----------')
//       const data = user

//   try {
//         const id = req.url.split('v1/')[1];
//          const users = getUserByid(id);
//          console.log( users,"))))))))))))))))))))))")
//         return NextResponse.json({
//             result:"OK",
//                users,
//              data
//         //   data
//         },
//         {
//             status:200
//         }) 
        
//     } catch (error) {
//       return NextResponse.json({
//      error
//       },
//       {
//      status:500
//       })        
//      }
//  } 
//  export const PUT = async(req:Request,res:Response)=>{
//     try {
//         const id = req.url.split('v1/')[1];
//         const {name,age } = await req.json()
//         userUpdateById(id,name ,age)
//         const userDetial = getUserByid(id);
//         return NextResponse.json({
//             result:"OK",
//             results:"false",
//             res:"user data succeffuly updated",
//               userDetial
//         },
    
//         {
//             status:500
//         })
//     } catch (error) {
//         NextResponse.json({
//             error
//         },
//         {
//             status:500
//         })
//     }
//     console.log("PUT","===================================")
//  }
//  export const DELETE = async (req:Request,res:Response)=>{
//     try {
    
//             const id = req.url.split('userinfo/')[1];
//             userRemoveById(id);
//             return NextResponse.json({
//                 message:"OK",
//                 res:"user info RemoveSucces fully"
//             })
//     } catch (error) {
//         NextResponse.json({
//             error
//         },
//         {
//             status:500
//         })
//     }
//     console.log("PUT","===================================")
//  }
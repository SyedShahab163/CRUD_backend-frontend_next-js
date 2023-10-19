import { NextResponse } from "next/server";
import { getUserByid,userUpdateById,userRemoveById } from "@/lib/data";
import { user } from "@/utils/db";


 export const GET = async (req:Request, res:Response)=>{
    //  const data = user
    //  console.log(data,"   GET 444444444444444444")
     console.log("   LINE-9===========",getUserByid("1") )
  try {
        const id = req.url.split('userinfo/')[1];
         const userDetial = getUserByid(id);
        // console.log(userDetial,"   LINE-13===========",id)
        return NextResponse.json({
            message:"OK",
            userDetial,
            //  data
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
        const id = req.url.split('userinfo/')[1];
        const {name,age } = await req.json()
        userUpdateById(id,name ,age)
        const userDetial = getUserByid(id);
        return NextResponse.json({
            message:"OK",
            res:"user data succeffuly updated",
            userDetial
        },
    
        {
            status:500
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
 export const DELETE = async (req:Request,res:Response)=>{
    try {
    
            const id = req.url.split('userinfo/')[1];
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
            status:500
        })
    }
    console.log("PUT","===================================")
 }
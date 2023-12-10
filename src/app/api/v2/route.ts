import { NextResponse } from "next/server";
import { GetAllUsersinfo,PostUserInfo } from "@/lib/data"
 import { user } from "@/utils/db";

// const userData =  [{id: "2", name: 'Moin', age: 9 }]

export const GET = async (req:Request, res:Response)=>{
    //   const data = user;
    try {
        //  console.log('___CAlling Get Api-------')
        const userData =  GetAllUsersinfo();
         var date = new Date();
         var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();

        
        
        return NextResponse.json({
            Result:"Ok",
            current_time:current_time,
            userData
             
        },
        {
            status:200
        }) 

    } catch (error) {
        return NextResponse.json({
            Error
        },{
            status:500
        })
    }
    
}

export const POST = async (req:Request, res:Response)=>{
    // const data = user;
    try {
        const{name, age, pk} = await req.json();
        const userData_all = {
           name:name,
           age:age,
           id:pk,
           date:new Date(),
        }
      PostUserInfo(userData_all);
        // userData.push(userData_all)

        return NextResponse.json({
            success : "this is Login ID",
            message:"Ok",
              userData_all,
            
        },
        {  
            status:200
        })
    } catch (error) {
        return NextResponse.json({
            error:"something went wrong"
        },
        {
            status:500
        })
    }
}
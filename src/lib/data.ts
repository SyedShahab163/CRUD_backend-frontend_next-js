type UserInfo = {
    name:String 
    age:number,
    id:String,
    // date:Date
}
 
const UserInfoDetails: UserInfo[] =  [  ]
export const  GetAllUsersinfo = () => UserInfoDetails;

export const  PostUserInfo = (userinfo:UserInfo) => UserInfoDetails.push(userinfo);
  
export const getUserByid = (id:string)=>{
     const userDate = UserInfoDetails.find((item)=>item.id=== id );
     if(userDate){
       return userDate
     }else{
        throw new Error("No data / ID found")
     }
}

//UserInfoDetails = {0:{id:5, "name":"abc", "age":12},
                 // {1:{id:6, "name":"bcd", "age":13}
                 // {3:{id:7, "name":"efg", "age":15}
                 // {4:{id:10, "name":"hij", "age":19}
export const userUpdateById = (id :string,name:string,age:number)=>{
    const  userDetial = UserInfoDetails.find((item)=>item.id === id);//ya ak loop ki tarha kaam karra hay ager is me id 0 hogi to is ka matab hay ka 1 hay 
    if(userDetial){
        userDetial.id = id;
         userDetial.name = name;
         userDetial.age = age;

    }else{
        throw new Error("User Detial is not  found")
    }
}

export const userRemoveById = (id:string) => UserInfoDetails.filter((item)=>item.id ! == id)
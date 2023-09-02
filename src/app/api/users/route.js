import clientPromise from "@/db/dbClient";
import { NextResponse } from "next/server";


export async function POST(req){
  
  const client = await clientPromise;
  const db = await client.db("buisness")
  const collection = await db.collection("users")
 
  return NextResponse.json({message: 'hellow api'})


}

 

  // const {users} = await req.json()
  // let user = await collection.insertOne({"users": users})

  // let user_list = await collection.findOne({
  //       _id: todo.insertedId
  //     })

  //       const body =await req.json()
  // console.log("Body", todo);

  //   const { title } = await req.json()

//   let todo = await collection.insertOne({ "title": title })

//   let find_todo = await collection.findOne({
//     _id: todo.insertedId
//   })



  // const todo = await collection.find({}).toArray()

 
// }



// import clientPromise from "@/db/dbClient";
// import { NextResponse } from "next/server";


// export async function POST(req) {








//   return NextResponse.json(find_todo)
// }
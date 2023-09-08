import clientPromise from "@/db/dbClient";
import { NextResponse } from "next/server";

export async function POST(req){
  const client = await clientPromise;
  const db = await client.db("buisness");
  const collection = await db.collection("users");
  const {userName, email,  role} = await req.json()
  let userData = await collection.insertOne({"userName": userName, "email": email, "role": role})
  console.log(userData)
  let find_data = await collection.findOne({
    _id: userData.insertedId
  })
  return NextResponse.json(find_data)
}


export async function GET(req) {

  const client = await clientPromise;
  const db = await client.db("buisness")
  const collection = await db.collection("users")

  const todo = await collection.find({}).toArray()

  return NextResponse.json(todo)
}
import clientPromise from "@/db/dbClient";
import { NextResponse } from "next/server";

export async function GET(req) {
  const email = req.query.email; 

  // if (!email) {
  //   return NextResponse.error("Email address is required", 400);
  // }

  const client = await clientPromise;
  const db = await client.db("buisness");
  const collection = await db.collection("users");

  const user = await collection.findOne({ email });
  // console.log(user)
  // if (!user) {
  //   return NextResponse.error("User not found", 404);
  // }

  return NextResponse.json(user);
}

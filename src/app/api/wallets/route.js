import clientPromise from "@/db/dbClient";
import { NextResponse } from "next/server";

export async function GET(req) {
  const client = await clientPromise;
  const db = await client.db("buisness");
  const collection = await db.collection("wallets");

  const todo = await collection.find({}).toArray();

  return NextResponse.json(todo);
}

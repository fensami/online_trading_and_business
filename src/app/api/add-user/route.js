import clientPromise from "@/db/dbClient";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const client = await clientPromise;
    const db = client.db("userData");
    const collection = db.collection("users");
    const { userName, email } = await req.json();

    if (!userName || !email) {
      return NextResponse.json({
        error: "Both userName and email are required",
      });
    }

    const result = await collection.insertOne({ userName, email });
    console.log(result);

    return NextResponse.json({
      message: "Data added successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: "An error occurred",
    });
  }
};
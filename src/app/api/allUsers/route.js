import { NextResponse } from "next/server";
import clientPromise from "../../../db/dbClient";

export async function GET(req) {
    try {
        const client = await clientPromise;
        const db = await client.db("buisness");
        const collection = await db.collection("users");

        const allUser = await collection.find().toArray();
        return NextResponse.json(allUser);
    } catch (error) {
        console.error("Error retrieving data from MongoDB:", error);

        return NextResponse.error("Failed to retrieve data from MongoDB");
    }
}
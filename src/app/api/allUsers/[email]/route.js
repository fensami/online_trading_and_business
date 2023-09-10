import clientPromise from "@/db/dbClient";
import { NextResponse } from "next/server";

export async function GET(request, content) {
    try {
        const client = await clientPromise;
        const db = await client.db("buisness");
        const collection = await db.collection("users");

        const allUser = await collection.find().toArray();

        const userData = allUser.filter((item) => item.email === content.params.email)

        return NextResponse.json(userData);
    } catch (error) {
        console.error("Error retrieving data from MongoDB:", error);

        return NextResponse.error("Failed to retrieve data from MongoDB");
    }
}
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

export async function POST(request, content) {
    let payload = await request.json();
    console.log(payload)
    const { userName, otherData } = payload;

    const client = await clientPromise;
    const db = client.db('buisness');
    const collection = db.collection('users');


    const email = content.params.email;

    if (!email) {
        return NextResponse.json({ result: "request data is not valid", success: false }, { status: 400 })
    }

    else {
        await collection.updateOne(
            { email },
            {
                $set: {
                    userName,
                    ...otherData,
                },
            }
        );
    }

    return NextResponse.json({ result: payload, success: true }, { status: 200 })
}
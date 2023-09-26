import clientPromise from "@/db/dbClient";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req){
    const client = await clientPromise;
    const db = await client.db("buisness");
    const collection = await db.collection("users");

    const {id, userName} = req.json()
    let find_user = await collection.findOne({_id: new ObjectId(id)})
    if(!find_user){
        return NextResponse.json({"error": "user not found for update !"})
    }

    await collection.update({_id: new ObjectId(id)}, {
        $set: {
            userName
        }
    })

    return NextResponse.json({
        "message": "user updated successfully",
        "id": id
    })
}
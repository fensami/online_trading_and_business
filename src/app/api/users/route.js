import clientPromise from "@/db/dbClient";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { username, email } = req.body;

      if (!username || !email) {
        return res.status(400).json({ error: "Username and email are required" });
      }

      const client = await clientPromise;
      
      const db = client.db("buisness");
      const collection = db.collection("users");

      const userDocument = {
        username,
        email,
      };

      const result = await collection.insertOne(userDocument);

      res.status(201).json({ message: "User data inserted successfully", userId: result.insertedId });
    } catch (error) {
      console.error("Error inserting user data:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).end(); 
  }
}
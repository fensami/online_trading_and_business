export async function POST(req, res) { // Add 'res' parameter to handle the response
    const client = await clientPromise;
    const db = await client.db("business"); // Correct the typo "buisness" to "business"
    const collection = await db.collection("users");
    const { email } = req.body;

    // Query the database to find a user with a matching email
    const user = await collection.findOne({ email });

    if (user) {
        // User found, send the user data as a response with the desired fields
        const { userName, email, role } = user;
        const userData = { userName, email, role };
        return res.status(200).json(userData);
    } else {
        // User not found, send an error response
        return res.status(404).json({ error: "User not found" });
    }
}

// pages/api/users/admin/[email].js

import clientPromise from '@/db/dbClient';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { email } = req.query;
      // Connect to your database (use the connectToDatabase function)
      // Query the database to check if the user is an admin
      const client = await clientPromise;
      const db = await client.db("buisness");
      const collection = await db.collection("users");

      const query = { email: email };
      const user = await collection.findOne(query);

      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
      }

      const isAdmin = user.role === 'admin';
      res.status(200).json({ admin: isAdmin });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

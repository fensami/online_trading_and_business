// const { MongoClient } = require("mongodb")

import { MongoClient } from "mongodb";

const url = process.env.MONGO_DB

const mongoClient = new MongoClient(url,{})

const clientPromise = mongoClient.connect()

export default clientPromise;


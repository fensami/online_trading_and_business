const { MongoClient } = require("mongodb")

const url ='mongodb+srv://buisnessAndTrade:cSsN1ygo0cG8rU9D@cluster0.ndjcfbs.mongodb.net/?retryWrites=true&w=majority'

const mongoClient = new MongoClient(url,{})

const clientPromise = mongoClient.connect()

export default clientPromise


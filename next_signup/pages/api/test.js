const { MongoClient } = require("mongodb");
async function handler(req, res) {
  console.log(req.body);
  // Replace the following with your Atlas connection string
  const url = `mongodb+srv://${process.env.MONGODB_ID}:${process.env.MONGODB_PASSWORD}@cluster0.qzj5nsv.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db("username");
    const usernameCollection = db.collection("username");

    if (req.method === "GET") {
      const foundUser = await usernameCollection.findOne();
      console.log(foundUser);
      return res.send(foundUser);
    }
    const insertUser = await usernameCollection.insertOne(req.body);
    console.log(insertUser);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }

  res.status(200).send(req.body);
}

export default handler;

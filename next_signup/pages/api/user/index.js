import { verifyPassword } from "../../../lib/auth";

const { MongoClient } = require("mongodb");
async function handler(req, res) {
  const { password, username } = req.body;

  const url = `mongodb+srv://${process.env.MONGODB_ID}:${process.env.MONGODB_PASSWORD}@cluster0.qzj5nsv.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db("users");
    const usersCollections = db.collection("users");
    const isExistingUser = await usersCollections.findOne({
      username: username,
    });
    // if (req.method === "GET") {
    //   console.log(req);
    //   console.log(req.params);
    //   return res.send("hi");
    // }
    console.log("api/user : ", isExistingUser);
    return res.send(isExistingUser);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

export default handler;

import { hashPassword } from "../../lib/auth";

const { MongoClient } = require("mongodb");
async function handler(req, res) {
  const { password, username } = req.body;
  const userInfo = req.body;

  const url = `mongodb+srv://${process.env.MONGODB_ID}:${process.env.MONGODB_PASSWORD}@cluster0.qzj5nsv.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db("users");
    const usersCollections = db.collection("users");

    const isExistingUser = await usersCollections.findOne({
      username: username,
    });
    console.log(isExistingUser);
    if (isExistingUser) {
      return res.status(422).send("중복된 아이디입니다");
    }
    const hashedPassword = await hashPassword(password);
    const insertUser = await usersCollections.insertOne({
      ...userInfo,
      password: hashedPassword,
    });
    console.log(insertUser);
    if (insertUser.acknowledged) return res.status(201).send(req.body);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}
export default handler;

const { MongoClient } = require("mongodb");
async function handler(req, res) {
  const url = `mongodb+srv://${process.env.MONGODB_ID}:${process.env.MONGODB_PASSWORD}@cluster0.qzj5nsv.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);
  async function isDuplicatedUsername(users, username) {
    const user = users.filter((user) => user.username === username)[0];
    if (user) {
      return user;
    } else {
      return null;
    }
  }
  try {
    await client.connect();
    const db = client.db("users");
    const usersCollections = db.collection("users");
    const insertUser = await usersCollections.insertOne(req.body);
    const find = await usersCollections.find().toArray();
    const isExistingUser = isDuplicatedUsername(find, req.body.username);
    if (isExistingUser) {
      return res.send("중복된 아이디입니다");
    }
    return res.status(201).send(req.body);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}
export default handler;

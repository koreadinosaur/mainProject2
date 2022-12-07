const { MongoClient, ObjectId } = require("mongodb");
async function handler(req, res) {
  const url = `mongodb+srv://${process.env.MONGODB_ID}:${process.env.MONGODB_PASSWORD}@cluster0.qzj5nsv.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);
  const {
    _id,
    dateOfBirth,
    email,
    gender,
    introduction,
    phone,
    username,
    password,
  } = req.body;
  const id = _id;
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
    console.log(id);
    const updated = await usersCollections.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          dateOfBirth,
          email,
          gender,
          introduction,
          phone,
          username,
          password,
        },
      }
    );
    console.log(updated);
    return res.status(201).send("success");
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}
export default handler;

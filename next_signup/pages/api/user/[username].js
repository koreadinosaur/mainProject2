const { MongoClient } = require("mongodb");
async function handler(req, res) {
  const { username } = req.query;
  async function isDuplicatedUsername(users, username) {
    const user = users.filter((user) => user.username === username)[0];
    if (user) {
      return user;
    } else {
      return null;
    }
  }

  const url = `mongodb+srv://${process.env.MONGODB_ID}:${process.env.MONGODB_PASSWORD}@cluster0.qzj5nsv.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db("users");
    const usersCollections = db.collection("users");

    const user = await usersCollections.findOne({
      username: username,
    });

    console.log(user);
    if (user) {
      return res.send("중복된 아이디입니다");
    } else {
      return res.send("사용가능한 아이디입니다.");
    }
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

export default handler;

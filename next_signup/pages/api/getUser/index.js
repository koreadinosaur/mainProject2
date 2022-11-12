const { MongoClient } = require("mongodb");
async function handler(req, res) {
  const url = `mongodb+srv://${process.env.MONGODB_ID}:${process.env.MONGODB_PASSWORD}@cluster0.qzj5nsv.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db("users");
    const usersCollections = db.collection("users");

    const find = await usersCollections.find().toArray();
    // if (req.method === "GET") {
    //   console.log(req);
    //   console.log(req.params);
    //   return res.send("hi");
    // }
    const findUser = find.filter(
      (user) =>
        user.username === req.body.username &&
        user.password === req.body.password
    );
    console.log(findUser[0]);

    return res.json(findUser[0]);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

export default handler;

const { MongoClient, ObjectId } = require("mongodb");
async function handler(req, res) {
  const url = `mongodb+srv://${process.env.MONGODB_ID}:${process.env.MONGODB_PASSWORD}@cluster0.qzj5nsv.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);
  const { _id, toDoList, inProgressList, doneList } = req.body;
  console.log("update---------------");
  console.log("api/todolist/update, req body", req.body);
  // console.log("req cookies", req.cookies);
  // console.log("req headers", req.headers);
  // console.log("req token", req.sessions);
  if (!_id) return;
  const id = _id;

  try {
    await client.connect();
    const db = client.db("users");
    const usersCollections = db.collection("users");
    const updated = await usersCollections.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          toDoList,
          inProgressList,
          doneList,
        },
      }
    );

    return res.status(201).json(updated);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}
export default handler;

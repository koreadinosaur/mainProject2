const users = require("../data/data.json");
const { v4: uuid } = require("uuid");

module.exports = {
  find: (req, res) => {
    const username = req.query.username;
    const loginUser = users.users.filter(
      (item) => String(item.username) === String(username)
    );

    console.log(loginUser);
    return res.status(200).json(loginUser[0]);
  },
  create: (req, res) => {
    const user_uuid = uuid();
    const newUser = {
      ...req.body,
      uuid: user_uuid,
    };
    users.users.push(newUser);

    return res.status(201).send(newUser);
  },
  update: (req, res) => {
    const { body } = req;
    const { uuid } = body;
    let targetIndex;
    users.users = users.users.map((item, index) => {
      if (item.uuid === uuid) {
        targetIndex = index;

        return body;
      } else {
        return item;
      }
    });
    console.log(targetIndex);
    return res.status(201).json(users.users[targetIndex]);
  },
};

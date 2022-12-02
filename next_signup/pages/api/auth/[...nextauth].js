import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "../../../lib/auth";

const { MongoClient } = require("mongodb");
import { Provider } from "react-redux";

export default NextAuth({
  name: "Credentials",
  session: { jwt: true },

  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const { username, password } = JSON.parse(credentials.data);
        const url = `mongodb+srv://${process.env.MONGODB_ID}:${process.env.MONGODB_PASSWORD}@cluster0.qzj5nsv.mongodb.net/?retryWrites=true&w=majority`;
        const client = new MongoClient(url);
        try {
          await client.connect();
          const db = client.db("users");
          const usersCollections = db.collection("users");
          const isExistingUser = await usersCollections.findOne({
            username,
          });

          if (!isExistingUser) {
            return null;
          }

          const isValid = await verifyPassword(
            password,
            isExistingUser.password
          );
          if (!isValid) {
            return null;
          }

          // return res.status(422).send({ message: "비밀번호가 틀렸습니다" });

          return isExistingUser;
        } catch (err) {
          console.error(err);
        } finally {
          await client.close();
        }
      },
    }),
  ],
});

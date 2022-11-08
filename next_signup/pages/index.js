import { Fragment } from "react";
import Layout from "../components/layout/Layout";
import MainNavigation from "../components/layout/MainNavigation";

const users = [
  {
    uuid: 1,
    username: "human_001",
    password: 1234,
    dateOfBirth: { year: "1500", month: "07", date: "07" },
    gender: "female",
    email: "human_001@gmail.com",
    phone: ["82", "010", "0000", "0000"],
    introduction: "ㅎㅇ",
  },
  {
    uuid: 2,
    username: "human_002",
    password: 1234,
    dateOfBirth: { year: "1500", month: "07", date: "07" },
    gender: "female",
    email: "human_001@gmail.com",
    phone: ["82", "010", "0000", "0000"],
    introduction: "ㅎㅇ",
  },
  {
    uuid: 3,
    username: "human_003",
    password: 1234,
    dateOfBirth: { year: "1500", month: "07", date: "07" },
    gender: "female",
    email: "human_001@gmail.com",
    phone: ["82", "010", "0000", "0000"],
    introduction: "ㅎㅇ",
  },
];
export default function Home() {
  return (
    <Fragment>
      <MainNavigation />
      <Layout>Hello World! this is Home</Layout>;
    </Fragment>
  );
}

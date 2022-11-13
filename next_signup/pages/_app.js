import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import "../styles/globals.css";
const data = [
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
function MyApp({ Component, pageProps }) {
  const [users, setUsers] = useState(data);
  const [currentUser, setCurrentUser] = useState();
  return (
    <PageLayout>
      <Component
        {...pageProps}
        users={users}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
    </PageLayout>
  );
}

export default MyApp;

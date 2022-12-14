import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
const Input = styled.input`
  color: brown;
`;
function Test() {
  const [inputValue, setInputValue] = useState();

  const submit = async (e) => {
    e.preventDefault();
    const res = await axios({
      method: "get",
      url: "/api/test",
      data: { username: inputValue },
    });
    // const res = await axios({
    //   method: "post",
    //   url: "/api/test",
    //   data: { username: inputValue },
    // });
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <form onSubmit={submit}>
      <label htmlFor="username">username</label>
      <Input
        type="text"
        placeholder="username"
        id="username"
        onChange={handleChange}
      />
      <button>submit</button>
    </form>
  );
}
export default Test;

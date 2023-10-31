import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <HeadeContainer>
        <a href={"/posts"}>Posts</a>
        <a href={"/users"}>Users</a>
      </HeadeContainer>
      <Outlet />
    </>
  );
}

const HeadeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;

export default App;

import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputComponent from "./components/InputComponent";
import { creatFakePosts } from "./services/createFakePosts";
import ListItem from "./components/ListItem";
import ListItemPosts from "./components/ListItemPosts";
import styled from "@emotion/styled";
import { Post } from "./models/Post";

function App() {

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const newPosts = creatFakePosts(10);
      setPosts(newPosts);
      setLoading(false);
    }, 750);
  }, []);

  const createPost = () => {
    const newPosts = creatFakePosts(1);
    setPosts([...posts, ...newPosts]);
  };

  const deletePost = (id: number) => {
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button isDisabled={false} onClick={createPost}>
        Create Posts
      </Button>
      <InputComponent
        onChange={(event) => setSearchFilter(event.target.value)}
        placeholder="Search..."
      />

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <ListContainer>
          {posts
            .filter((post) => post.title.match(new RegExp(searchFilter, "ig")))
            .map(({ id, title, description, image, date, likes }) => (
              <ListItemPosts 
                key={id}
                title={title}
                description={description}
                image={image}
                date={date}
                likes={likes}
                onClick={() => deletePost(id)}
              />
            ))}
        </ListContainer>
      )}
    </>
  );
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Button = styled.button<{ isDisabled: boolean }>`
  background-color: red;
  outline: inherit;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
  user-select: ${({ isDisabled }) => (isDisabled ? "none" : "initial")};
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  border-radius: 0.5rem;

  &:hover {
    background-color: ${({ isDisabled }) => (isDisabled ? "" : "blue")};
  }
`;

export default App;

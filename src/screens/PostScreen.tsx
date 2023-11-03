import { useState } from "react";
import styled from "@emotion/styled";
import "../App.css";
import InputComponent from "../components/InputComponent";
import ListItemPosts from "../components/ListItemPosts";
import { creatFakePosts } from "../services/createFakePosts";
import { usePosts } from "../hooks/usePosts";

function PostScreen() {

  const { posts, loading, deletePost, setPosts } = usePosts();
  const [searchFilter, setSearchFilter] = useState("");

  // useEffect(() => {
  //   setTimeout(() => {
  //     const newPosts = creatFakePosts(10);
  //     setPosts(newPosts);
  //     setLoading(false);
  //   }, 750);
  // }, []);

  const createPost = () => {
    const newPosts = creatFakePosts(1);
    setPosts([...posts, ...newPosts]);
  };

  return (
    <>
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

export default PostScreen;

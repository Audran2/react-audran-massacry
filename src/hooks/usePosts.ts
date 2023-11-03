import { useEffect, useState } from "react";
import { Post } from "../models/Post";
import { fetchPosts } from "../services/posts/api";
import { transformedPost } from "../services/posts/utils";

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const result = await fetchPosts();
      console.log("result", result);
      const transformed = result.posts.map(transformedPost);
      setPosts(transformed);
      setLoading(false);
    })();
  }, []);

  const deletePost = (id: number) => {
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
  };

  return { posts, loading, setPosts, deletePost };
};

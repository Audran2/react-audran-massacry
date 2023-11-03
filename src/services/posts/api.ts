export const fetchPosts = async () => {
    const data = await fetch("https://dummyjson.com/posts");
    const json = await data.json();
    return json;
};
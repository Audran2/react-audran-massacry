export const fetchUsers = async () => {
    const data = await fetch("https://dummyjson.com/users");
    const json = await data.json();
    return json;
};
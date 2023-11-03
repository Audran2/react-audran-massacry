import { useEffect, useState } from "react";
import { User } from "../models/User";
import { transformedUser } from "../services/users/utils";
import { fetchUsers } from "../services/users/api";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const result = await fetchUsers();
      console.log("result", result);
      const transformed = result.users.map(transformedUser);
      setUsers(transformed);
      setLoading(false);
    })();

    // setTimeout(() => {
    //   const nextUsers = creatFakeUser(10);
    //   setUsers(nextUsers);
    //   setLoading(false);
    // }, 750);
  }, []);

  const deleteUser = (id: number) => {
    const nextUsers = users.filter((user) => user.id !== id);
    setUsers(nextUsers);
  };

  return { users, loading, setUsers, deleteUser };
};

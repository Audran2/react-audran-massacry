import { useEffect, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import ButtonComponent from "./components/ButtonComponent";
import InputComponent from "./components/InputComponent";
// import { Controller, useForm } from "react-hook-form";
import { creatFakeUser } from "./services/createFakeUser";
import ListItem from "./components/ListItem";
import styled from "@emotion/styled";
import { User } from "./models/User";

function App() {
  // const { register, handleSubmit, control, formState, trigger, watch, reset } = useForm({
  //   defaultValues: {
  //     firstname: '',
  //     lastname: '',
  //     email: '',
  //     tel: '',
  //   }
  // });

  // const isFormValid = formState.isValid;
  // const isFormDirty = formState.isDirty;

  // console.log(isFormValid, isFormDirty);

  // console.log(creatFakeUser(50));

  // const nameRegex = {
  //   min: 1,
  //   max: 50,
  //   pattern: /^[a-zA-Z\-]+$/
  // };

  // const placeholder = {
  //   fNameph: "e.g., John",
  // };

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const nextUsers = creatFakeUser(10);
      setUsers(nextUsers);
      setLoading(false);
    }, 750);
  }, []);

  const createUser = () => {
    const nextUsers = creatFakeUser(1);
    setUsers([...users, ...nextUsers]);
  };

  const deleteUser = (id: number) => {
    const nextUsers = users.filter((user) => user.id !== id);
    setUsers(nextUsers);
  };

  // correction prof
  const filtered = useMemo(() => {
    if (!searchFilter) return users;

    return users.filter((user) =>
      user.name.toLowerCase().includes(searchFilter.toLowerCase())
    );
  }, [searchFilter, users]);
  // correction prof

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
      <Button isDisabled={false} onClick={createUser}>
        Create user
      </Button>
      <InputComponent
        onChange={(event) => setSearchFilter(event.target.value)}
        placeholder="Search..."
      />

      {/* <form>
        <Controller
          control={control}
          render={({ field }) => (
            <InputComponent
              value={field.value}
              placeholder={placeholder.fNameph}
              onChangeText={field.onChange}
            />
          )}
          name="firstname"
          rules={{
            required: true,
            pattern: {
              value: nameRegex.pattern,
              message: "Le prénom ne doit contenir que des lettres."
            }
          }}
        />
      </form>  */}

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <ListContainer>
          {users
            .filter((user) => user.name.match(new RegExp(searchFilter, "ig")))
            .map(({ id, name, avatar }) => (
              <ListItem
                key={id}
                name={name}
                avatar={avatar}
                onClick={() => deleteUser(id)}
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

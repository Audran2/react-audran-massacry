import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import ButtonComponent from "./components/ButtonComponent";
import InputComponent from "./components/InputComponent";
import { Controller, useForm } from "react-hook-form";
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

  useEffect(() => {
    console.log('no deps');
  })

  useEffect(() => {
    console.log('empty deps');
  }, [])

  return (
    <>
      {/* <div>
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
      <ButtonComponent isDisabled={false} textButton={'Not disabled'}/>
      <ButtonComponent isDisabled={true} textButton={'Disabled'}/>
      {/* <InputComponent /> */}

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
      <ListContainer>
      {users.map(({id, name, avatar}) => (
        <ListItem key={id} name={name} avatar={avatar}/>
      ))}
    </ListContainer>
    </>
  );
}

const ListContainer = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;
`

export default App;

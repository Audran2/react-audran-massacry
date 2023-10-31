import styled from "@emotion/styled";

export default function ButtonComponent({value, placeholder, onChangeText} : {value: string, placeholder: string, onChangeText?: (text: string) => void;}) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChangeText?.(event.target.value);
    };

    return (
        <Input placeholder={placeholder} value={value} type="text" onChange={handleChange}/>
    )
}

const Input = styled.input`
  background-image: linear-gradient(#20aee3, #20aee3), linear-gradient(#bfbfbf, #bfbfbf);
  border: 0 none;
  border-radius: 0;
  box-shadow: none;
  float: none;
  background-color: transparent;
  background-position: center bottom, center calc(100% - 1px);
  background-repeat: no-repeat;
  background-size: 0 2px, 100% 1px;
  padding: 0;
  transition: background 0s ease-out 0s;
  color: white;
  min-height: 35px;
  display: initial;
  width: 100%;
  outline: none;
  font-size: 15px;
  &:focus {
      background-size: 100% 2px, 100% 1px;
      outline: 0 none;
      transition-duration: 0.3s;
    }
`;
import styled from "@emotion/styled";

export default function ButtonComponent({
  isDisabled,
  textButton,
}: {
  isDisabled: boolean;
  textButton: string;
}) {
  return (
    <Button isDisabled={isDisabled}>
      <span>{textButton}</span>
    </Button>
  );
}

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

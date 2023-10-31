import styled from "@emotion/styled";

const AvatarComponent = ({ src }: { src: string }) => {
  return (
    <DivContainer>
      <img src={src} />
    </DivContainer>
  );
};

const DivContainer = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export default AvatarComponent;

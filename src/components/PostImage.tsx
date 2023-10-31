import styled from "@emotion/styled";

const PostImg = ({ src }: { src: string }) => {
  return (
    <DivContainer>
      <img src={src} />
    </DivContainer>
  );
};

const DivContainer = styled.div`
    width: auto;
    max-width: 12rem;
    height: 100%;
    border-radius: 0.5rem;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export default PostImg;

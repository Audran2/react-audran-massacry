import styled from "@emotion/styled";
import PostImg from "./PostImage";

type Props = {
  title: string;
  description: string;
  image: string;
  date: string;
  likes: number;
  onClick: () => void;
};

const ListItemPosts = ({
  title,
  description,
  image,
  date,
  likes,
  onClick,
}: Props) => {
  return (
    <ItemContainer onClick={onClick}>
      <PostImg src={image} />
      <TextContainer>
        <h4>{title}</h4>
        <p>{description}</p>
        <span>{likes} likes</span>
        <span className="date">{date}</span>
      </TextContainer>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  margin: 0.2rem 0;
  transition: background-color 0.25s ease-in-out;

  &:hover {
    background-color: #181818;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;

  h4 {
    margin: 0;
  }

  .date {
    color: #858484;
  }
`;

export default ListItemPosts;

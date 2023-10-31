import styled from "@emotion/styled";
import AvatarComponent from "./AvatarComponent";

type Props = {
    name: string,
    avatar: string,
    onClick: () => void,
}

const ListItem = ({name, avatar, onClick}: Props) => {
    return(
    <ItemContainer onClick={onClick}>
        <AvatarComponent src={avatar}/>
        {name}
    </ItemContainer>
    )
}

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    margin: 0.2rem 0;
    transition: background-color 0.25s ease-in-out;

    &:hover {
        background-color: #181818;
    }
`

export default ListItem;
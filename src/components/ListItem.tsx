import styled from "@emotion/styled";
import AvatarComponent from "./AvatarComponent";

type Props = {
    name: string,
    avatar: string,
}

const ListItem = ({name, avatar}: Props) => {
    return(
    <ItemContainer>
        <AvatarComponent src={avatar}/>
        {name}
    </ItemContainer>
    )
}

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export default ListItem;
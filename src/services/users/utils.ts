export interface InputUser {
    id: string;
    firstName: string;
    lastName: string;
    image: string;
}

export const transformedUser = ({
  id,
  firstName,
  lastName,
  image,
}: InputUser) => ({
  id,
  name: `${firstName} ${lastName}`,
  avatar: image,
});

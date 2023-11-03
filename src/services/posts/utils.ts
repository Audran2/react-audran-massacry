import { faker } from "@faker-js/faker";

export interface InputPost {
    id: string;
    title: string;
    body: string;
}

export const transformedPost = ({
  id,
  title,
  body,
}: InputPost) => ({
  id,
  title,
  description: body,
  image: faker.image.image(),
  date: new Date(faker.date.recent()).toLocaleDateString('fr-FR'),
        likes: faker.datatype.number(),
});

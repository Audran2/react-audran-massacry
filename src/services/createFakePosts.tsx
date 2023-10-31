import { faker } from "@faker-js/faker";
import { Post } from "../models/Post";

export const creatFakePosts = (count: number): Post[] =>
    Array.from(Array(count).keys()).map((id) => ({
        id: new Date().getTime() + id,
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        image: faker.image.image(),
        date: new Date(faker.date.recent()).toLocaleDateString('fr-FR'),
        likes: faker.datatype.number(),
    }));

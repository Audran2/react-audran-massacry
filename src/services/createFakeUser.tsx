import { faker } from "@faker-js/faker";
import { User } from "../models/User"

export const creatFakeUser = (count: number): User[] =>
  Array.from(Array(count).keys()).map((id) => ({
    id,
    avatar: faker.image.avatar(),
    name: faker.name.fullName(),
  }));

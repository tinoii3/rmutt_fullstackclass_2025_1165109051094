import { prisma } from "../lib/prisma.js";

export const findUserByUsername = (username: string) => {
  return prisma.users.findUnique({
    where: { user_name: username }
  });
};

export const createUser = (data: any) => {
  return prisma.users.create({
    data
  });
};
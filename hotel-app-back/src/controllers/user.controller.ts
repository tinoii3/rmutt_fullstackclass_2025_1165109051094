import { type Request, type Response } from "express";
import { prisma } from "../lib/prisma.js";

export const getUsers = async (_req: Request, res: Response) => {
  const users = await prisma.user.findMany();

  const formattedUsers = users.map((user: { id: { toString: () => any; }; }) => ({
    ...user,
    id: user.id.toString(),
  }));

  res.json(formattedUsers);
};
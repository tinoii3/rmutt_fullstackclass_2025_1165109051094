import { prisma } from "../lib/prisma.js"

export const roomFindAll = async () => {
    return prisma.rooms.findMany();
}
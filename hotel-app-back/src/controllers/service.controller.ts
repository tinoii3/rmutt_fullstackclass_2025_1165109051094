import { type Request, type Response } from "express";
import { prisma } from "../lib/prisma.js";

export const getService = async (_req: Request, res: Response) => {
  try {
    const services = await prisma.services.findMany();
    res.json(services); 
  } catch (error) {
    console.error(error)
    res.status(500).json({ mesage: "Database error" });
  }
};
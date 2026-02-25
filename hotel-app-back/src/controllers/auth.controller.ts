import { Request, Response } from "express";
import { loginService, registerService } from "../services/auth.service.js";

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const result = await loginService(username, password);

    res.json(result);
  } catch (error: any) {
    res.status(401).json({
      message: error.message
    });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const result = await registerService(req.body);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({
      message: error.message
    });
  }
};
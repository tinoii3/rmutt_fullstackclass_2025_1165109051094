import { Request, Response } from "express";
import { loginService, refreshTokenLogic, registerService } from "../services/auth.service.js";

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

export const refreshTokenService = async (req: Request, res: Response) => {
  try {
    const { refresh_token } = req.body;
    if (!refresh_token) throw new Error("Token is required");

    const result = await refreshTokenLogic(refresh_token);
    res.json(result);
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};
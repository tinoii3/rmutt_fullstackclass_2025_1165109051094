import { type Request, type Response } from "express"
import * as manageRoomService from "../services/manage-room.service.js"

export const getRooms = async (_req: Request, res: Response) => {
    try {
        const room = await manageRoomService.getAllRooms();
        res.json(room);
    } catch (error) {
        console.log(error)
        res.status(500).json({ mesage: "Database error" })
    }
}
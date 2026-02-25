import * as manageRoomRepo from "../repository/manage-room.repository.js"

export const getAllRooms = async () => {
    return manageRoomRepo.roomFindAll();
}
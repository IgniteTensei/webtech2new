import { mongoDBService } from "./MongoDBService";

export async function createDB() {
    await mongoDBService.createDB();
}
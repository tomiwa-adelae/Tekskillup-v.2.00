" use server";

import { CreateUserParams } from "@/types";
import { connectToDatabase } from "../database";
import User from "../database/models/user.model";

export async function createUser(userData: CreateUserParams) {
	try {
		connectToDatabase();

		const newUser = await User.create(userData);

		console.log(newUser);

		return newUser;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

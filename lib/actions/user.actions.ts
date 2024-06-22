" use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { CreateUserParams } from "@/types";

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

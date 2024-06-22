import { Schema } from "mongoose";

export interface CreateUserParams {
	clerkId: string;
	firstName: string;
	lastName: string;
	email: string;
	picture: string;
}

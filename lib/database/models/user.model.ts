import { Schema, models, model } from "mongoose";

interface IUser extends Document {
	clerkId: string;
	name: string;
	email: string;
	password?: string;
	bio?: string;
	picture: string;
	phoneNumber?: string;
	isAdmin?: boolean;
	createdAt?: Date;
	updatedAt?: Date;
}

const UserSchema = new Schema(
	{
		clerkId: {
			type: String,
			required: true,
			unique: true,
		},
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
		},
		bio: {
			type: String,
		},
		picture: {
			type: String,
			required: true,
		},
		phoneNumber: {
			type: String,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const User = models.user || model("User", UserSchema);

export default User;

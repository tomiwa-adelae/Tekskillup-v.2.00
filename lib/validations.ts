import * as z from "zod";

export const ContactSchema = z.object({
	firstName: z.string().max(2000),
	lastName: z.string().max(2000),
	email: z.string().email(),
	phoneNumber: z.string().min(10).max(12),
	subject: z.string().max(100),
	message: z.string().max(2000),
});

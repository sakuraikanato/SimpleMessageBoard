import dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

dotenv.config({path: "@/.env"});

export default defineConfig({
	dialect: "mysql",
	schema: "./app/db/schema.ts",
	out: "./app/db/drizzle",
	dbCredentials: {
		user: process.env.DB_USER || "root",
		password: process.env.DB_PASSWORD || "password",
		host: String(process.env.DB_HOST) || "localhost",
		port: Number(process.env.DB_PORT) || 3306,
		database: String(process.env.DB_DATABASE || "dev"),
	},
});

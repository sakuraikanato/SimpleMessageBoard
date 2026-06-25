import { mysqlTable, bigint, varchar, timestamp } from "drizzle-orm/mysql-core";

export const users = mysqlTable('users', {
    id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    password: varchar('password', { length: 255 }).notNull(),
    name: varchar('name', { length: 255 }).notNull().unique(),
    displayName: varchar('display_name', { length: 255 }),
    createAt: timestamp('create_at', { mode: 'date' }).defaultNow(),
    updateAt: timestamp('update_at', { mode: 'date' }).defaultNow()
})
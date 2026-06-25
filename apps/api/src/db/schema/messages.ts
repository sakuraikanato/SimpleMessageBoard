import { mysqlTable, bigint, text, timestamp } from "drizzle-orm/mysql-core";
import { threads } from "./threads";

export const messages = mysqlTable('messages', {
    id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
    content: text('content').notNull(),
    threadId: bigint('thread_id', { mode: 'number'}).notNull().references(() => threads.id),
    createAt: timestamp('create_at', { mode: 'date' }).defaultNow(),
    updateAt: timestamp('update_at', { mode: 'date' }).defaultNow()
})
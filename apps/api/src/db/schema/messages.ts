import { mysqlTable, bigint, text } from "drizzle-orm/mysql-core";
import { threads } from "./threads";

export const messages = mysqlTable('messages', {
    id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
    content: text('content').notNull(),
    threadId: bigint('thread_id', { mode: 'number'}).notNull().references(() => threads.id)
})
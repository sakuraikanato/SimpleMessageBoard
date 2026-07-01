import { mysqlTable, bigint, varchar, timestamp } from 'drizzle-orm/mysql-core';
import { users } from './auth-schema';

export const threads = mysqlTable('threads', {
  id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
  title: varchar('title', { length: 255 }).notNull(),
  ownerId: varchar('owner_id', { length: 36 }).references(() => users.id),
  createAt: timestamp('create_at', { mode: 'date' }).defaultNow(),
  updateAt: timestamp('update_at', { mode: 'date' }).defaultNow()
});
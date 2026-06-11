import { mysqlTable, bigint, varchar } from 'drizzle-orm/mysql-core';
import { users } from './users';

export const threads = mysqlTable('threads', {
  id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
  title: varchar('title', { length: 255 }).notNull(),
  ownerId: bigint('owner_id', { mode: 'number' }).references(() => users.id)
});
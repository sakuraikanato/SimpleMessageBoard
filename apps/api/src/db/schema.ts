import { mysqlTable, bigint, varchar } from 'drizzle-orm/mysql-core';

export const clients = mysqlTable('clients', {
  id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
});
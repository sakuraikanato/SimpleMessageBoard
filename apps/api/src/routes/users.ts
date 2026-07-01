import { Hono } from "hono";
import { db } from "../db";
import { users } from "../db/schema";


const app = new Hono()

.get('/', async (c) => {
    const user = await db.query.users.findFirst();
    return c.json(user, 200);
})

export const user = app;
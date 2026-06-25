import { Hono } from "hono";
import db from "../db";
import { threads } from "../db/schema";

const app = new Hono()

.get('/', async (c) => {
    const thread = await db.query.threads.findMany();
    if (!thread) c.status(404);
    return c.json(thread, 200);
})
.post('/', async (c) => {
    const body = await c.req.json()
    await db.insert(threads).values([{title: body.title, ownerId: body.owner_id}]);
})

export const thread = app;
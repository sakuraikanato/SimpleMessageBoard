import { Hono } from "hono";
import db from "../db";
import { users } from "../db/schema";
import { sql, eq } from "drizzle-orm";

const app = new Hono()

.get('/', async (c) => {
    const user = await db.query.users.findFirst();
    return c.json(user, 200);
})
.post('/', async (c) => {
    console.log("実行されたよ")
    try {
        const body = await c.req.json();
        console.log(`${typeof body.email}, ${typeof body.password}, ${typeof body.name}`)
        const success = await db.insert(users).values({
            email: body.email,
            password: body.password, 
            name: body.name,
            displayName: null,
        });
        return c.text("データ挿入に成功しました", 200);
    } catch (e: any) {
        console.error("FULL ERROR");
        console.dir(e, { depth: null });

        return c.json(
            {
            message: e?.message,
            cause: e?.cause,
            },
            500
        );
    }
})

export const user = app;
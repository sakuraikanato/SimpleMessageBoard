import { Hono } from 'hono'
import { cors } from 'hono/cors'
import dotenv from 'dotenv'
import { thread, user } from './routes'
import { hasCauseCode } from './utils'
import { DrizzleError } from 'drizzle-orm'

dotenv.config({path: "@/.env", debug: true})
const app = new Hono()

.use("*", cors({
  origin: "*"
}))

.route('/users', user)
.route('/threads', thread)
.onError((err, c) => {
  if (hasCauseCode(err)) {
    /* データベース関連のエラーハンドリング */
    switch (err.cause.code) {
      case "ER_NO_DEFAULT_FOR_FIELD":
        return c.json({success: false, message: "必要項目が指定されていません"}, 400)
        break
      case "ER_DUP_ENTRY":
        return c.json({success: false, message: "このデータはすでに存在します"}, 409)
        break
    }
    return c.json({success: false, message: "予期せぬエラー"})
  } else {
    return c.json({success: false, data: err})
  }
})

export type AppType = typeof app;
export default {
  fetch: app.fetch,
  port: process.env.API_PORT
}

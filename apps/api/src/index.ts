import { Hono } from 'hono'
import { cors } from 'hono/cors'
import dotenv from 'dotenv'
import { thread, user } from './routes'

dotenv.config({path: "@/.env", debug: true})
const app = new Hono()

.use("*", cors({
  origin: "*"
}))

.route('/users', user)
.route('/threads', thread)

export type AppType = typeof app;
export default {
  fetch: app.fetch,
  port: process.env.API_PORT
}

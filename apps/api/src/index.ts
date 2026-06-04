import { Hono } from 'hono'
import { cors } from 'hono/cors'
import dotenv from 'dotenv'

const app = new Hono()
dotenv.config({path: "@/.env", debug: true})

app.use("*", cors({
  origin: "*"
}))

const route = app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export type AppType = typeof route;
export default {
  fetch: app.fetch,
  port: process.env.API_PORT
}

import { z } from "zod"

export const sqlErrorSchema = z.object({
    message: z.string(),
    cause: z.object({
        code: z.string(),
        errorno: z.number(),
        sqlState: z.string(),
        sqlMessage: z.string(),
        sql: z.string()
    })
})

export type SqlError = z.infer<typeof sqlErrorSchema>;
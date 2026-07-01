"use server"
import { authClient } from "@/utils/auth-client";
import { z } from "zod";

const LoginFormDataSchema = z.object({
    email: z.email(),
    password: z.string()
})

export async function loginAction(formdata: FormData) {
    const email = formdata.get("email");
    const password = formdata.get("password");

    const loginFormData = LoginFormDataSchema.safeParse({email: email, password: password});
    if (!loginFormData.success) {return null};

    const { data } = await authClient.signIn.email({
        ...loginFormData.data,
        rememberMe: true
    })

    return data
}
"use server";
import bcrypt from "bcrypt";
import * as z from "zod";   
import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const Register = async (values: z.infer<typeof RegisterSchema>) => {
    //validamos el usuario del servicio de autenticacion aqui
    const validatedFields = RegisterSchema.safeParse(values);
    if (!validatedFields.success) {
        console.log("Validation failed", validatedFields.error);
        return { error: "Invalid input data" };
    
    }
    // Si la validación es exitosa, procedemos a registrar al usuario
    const { email, password, name } = validatedFields.data; 
    const hashedPassword = await bcrypt.hash(password, 10); // Hasheamos la contraseña 
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { error: "Email already in use" };
    }

    await db.user.create({
        data: {
            email,  
            name,
            password: hashedPassword,
        },
    });

    //TODO: send verification token email


    // Simulamos el guardado en base de datos
    return { success: "User created!" };
}

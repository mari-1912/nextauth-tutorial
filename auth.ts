export const runtime = "nodejs";

import NextAuth, { DefaultSession } from "next-auth";
import authCredentials from "@/auth.credentials";   // lo movemos a otro archivo
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "./lib/db";
import { getUserById } from "./data/user";

declare module "@auth/core" {
  interface Session {
    user: { 
      role: "ADMIN" | "GUEST" | "USER"
    } & DefaultSession["user"];
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  callbacks: {
    async session ({ token, session }) {
      console.log({
        sessionToken: token,
        sessionData: session
      })
      if(token.sub &&  session.user) {
      session.user.id = token.sub;
      }
      if(token.role && session.user) {
        session.user.role = token.role;
      }
      return session
    },
    async jwt({ token }) {
      // Añadimos el role al token JWT
      if(!token.sub) return token;
      // obtenemos el usuario de la base de datos
      const existingUser =  await getUserById(token.sub);
      // si no existe el usuario, retornamos el token sin cambios
      if(!existingUser) return token;
      // añadimos el role al token
      token.role = existingUser.role;
      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authCredentials
});

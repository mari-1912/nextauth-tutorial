declare module "@auth/core" {
  interface Session {
    user: { 
      role: "ADMIN" | "GUEST" | "USER"
    } & DefaultSession["user"];
  }
}
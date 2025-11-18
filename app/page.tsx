"use client";

import { cn } from "@/lib/utils";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

export const poppins = Poppins({
  weight: ["600"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-radial from-blue-300 to-blue-900">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            poppins.className
          )}
        >
          Auth
        </h1>
        <p className="text-white text-lg">
          Servicio de autenticación con NextAuth.js y Next.js 13
        </p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}

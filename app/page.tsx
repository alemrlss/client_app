"use client"
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from 'react';

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-16 w-16 mb-4 bg-color3 rounded-full"></div>
          <p className="text-color3 text-2xl font-semibold">Cargando...</p>
        </div>
      </div>
    );
  }

  if (session) {
    redirect("/dashboard");
  }

  if (!session) {
    redirect('/login')
  }
}

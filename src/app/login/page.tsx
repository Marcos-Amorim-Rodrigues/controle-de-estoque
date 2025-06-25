"use client"
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Add authentication logic here
    redirect('/dashboard');
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-between bg-white">
      <div className="flex flex-col h-full items-center justify-center pt-20">
        <h3 className="italic font-bold text-xl">ControleDeEstoque</h3>
      </div>
      <Card className="w-[90%] lg:w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-left text-xl">Login</CardTitle>
          <CardDescription className="text-left">Insira suas credenciais de login abaixo e clique no botão entrar para acessar a plataforma.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-row items-center justify-between gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="joao@gmail.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoFocus
              />
            </div>
            <div className="flex flex-row items-center justify-between gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="w-full flex flex-row items-end justify-end">
              <Button type="submit" className="w-auto hover:cursor-pointer" disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="flex flex-col items-end justify-end pb-4 text-center mb-6">
        Controle de Estoque © 2025 | Análise e Desenvolvimento de Sistemas
      </div>
    </div>
  );
}
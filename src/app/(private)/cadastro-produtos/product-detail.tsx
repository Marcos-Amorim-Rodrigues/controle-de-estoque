"use client"

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ProductDetail() {
  return (
    <div className="w-full rounded-2xl border-2 py-4 px-8 flex flex-col">
      <h1 className="text-2xl font-bold">Detalhes do produto</h1>
      <p className="text-gray-400 mb-6">Descreva os detalhes do produto a ser cadastrado.</p>
      <label htmlFor="name" className="mb-2">Nome</label>
      <Input type="text" id="name" placeholder="Ex: Quadro de madeira 72cm x 45cm" className="mb-2" />
      <label htmlFor="description" className="mb-2">Descrição</label>
      <Textarea placeholder="Ex: Quadro de ferro e madeira artesanais com o melhor acabamento, para incrementar na decoração do seu espaço!" className="h-24"></Textarea>
      </div>
  )
}
"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ProductRegisterPage() {
  return (
    <div>
      <div className="w-full flex flex-row justify-between gap-4 p-4">
        <div className="flex flex-row gap-8 items-center">
          <h1 className="text-xl font-medium mb-4">Adicionar produtos</h1>
          <div className="border-1 px-2 rounded-full"><p  className="text-sm">Em estoque</p></div>
        </div>
        <Button className="bg-black text-white px-4 py-2 rounded-sm   cursor-pointer">Cadastrar</Button>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between gap-4 p-4">
        <div className="flex flex-col gap-8 min-w-[70%]">
          <div className="w-full rounded-2xl border-2 py-4 px-8 flex flex-col">
            <h1 className="text-2xl font-bold">Detalhes do produto</h1>
            <p className="text-gray-400 mb-6">Descreva os detalhes do produto a ser cadastrado.</p>
            <label htmlFor="name" className="mb-2">Nome</label>
            <Input type="text" id="name" placeholder="Ex: Quadro de madeira 72cm x 45cm" className="mb-2" />
            <label htmlFor="description" className="mb-2">Descrição</label>
            <Textarea placeholder="Ex: Quadro de ferro e madeira artesanais com o melhor acabamento, para incrementar na decoração do seu espaço!" className="h-24"></Textarea>
          </div>
          <div className="w-full rounded-2xl border-2 py-4 px-8 flex flex-col">
            <h1 className="text-2xl font-bold">Estoque</h1>
            <p className="text-gray-400 mb-6">Defina abaixo os valores e a quantidade em estoque do produto.</p>
            <div className="flex flex-row w-full justify-evenly">
              <div>
                <label htmlFor="quantity">Quantidade</label>
                <hr />
                <Input className="mt-2" type="text" placeholder="100" id="quantity" />
              </div>
              <div>
                <label htmlFor="price">Preço (em R$)</label>
                <hr />
                <Input className="mt-2" type="text" placeholder="99,99" id="price" />
              </div>
            </div>
          </div>
          <div className="w-full h-fit rounded-2xl border-2 py-4 px-8">
          <h1 className="text-2xl font-bold">Categoria do produto</h1>
          <p className="mt-2 mb-4">Categoria</p>
          <Select>
            <SelectTrigger className="w-full lg:w-1/2">
              <SelectValue placeholder="Selecione a categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="furniture">Móveis</SelectItem>
              <SelectItem value="rugs">Tapetes</SelectItem>
              <SelectItem value="decoration">Decoração</SelectItem>
            </SelectContent>
          </Select>
        </div>
        </div>
        <div className="w-full h-fit rounded-2xl border-2 py-4 px-8">
          <h1 className="text-2xl font-bold">Status do produto</h1>
          <p className="mt-2 mb-4">Status</p>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecione o status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="missing">Em falta</SelectItem>
              <SelectItem value="active">Ativo</SelectItem>
              <SelectItem value="obsolete">Obsoleto</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
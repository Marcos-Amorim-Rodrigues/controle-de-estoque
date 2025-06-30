"use client"

import { Button } from "@/components/ui/button";
import ProductInfo from "./product-info";

export default function TransactionsPage() {
  return (
    <div>
      <div className="w-full flex flex-col justify-between gap-4 p-4">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Detalhes do produto</h1>
          <p className="text-gray-400 mb-6">Descreva os detalhes do produto a ser cadastrado.</p>
        </div>
        <ProductInfo />
        
        <div className="w-full flex justify-end p-4 gap-4">
          <Button className="border-2 border-black bg-white text-black px-4 py-2 rounded-sm cursor-pointer hover:bg-gray-50">Adicionar em estoque</Button>
          <Button className="bg-black text-white px-4 py-2 rounded-sm   cursor-pointer">Realizar venda</Button>
        </div>
      </div>
    </div>
  );
}
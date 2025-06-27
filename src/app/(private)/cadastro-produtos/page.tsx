"use client"

import { Button } from "@/components/ui/button";
import ProductDetail from "./product-detail";
import ProductStock from "./stock";

export default function ProductRegisterPage() {
  return (
    <div>
      <div className="w-full flex flex-row justify-between gap-4 p-4">
        <div className="flex flex-row gap-8 items-center">
          <h1 className="text-xl font-medium mb-4">Adicionar produtos</h1>
          <div className="border-1 px-2 rounded-full"><p  className="text-sm">Em estoque</p></div>
        </div>
        
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between gap-4 p-4">
        <div className="flex flex-col gap-8 w-full">
          <ProductDetail />
          <ProductStock />
        </div>
      </div>
      <div className="w-full flex justify-end p-4">
        <Button className="bg-black text-white px-4 py-2 rounded-sm   cursor-pointer">Cadastrar</Button>
      </div>
    </div>
  );
}
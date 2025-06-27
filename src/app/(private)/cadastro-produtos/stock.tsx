"use client"

import { Input } from "@/components/ui/input";

export default function ProductStock() {
  return (
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
  ) 
}

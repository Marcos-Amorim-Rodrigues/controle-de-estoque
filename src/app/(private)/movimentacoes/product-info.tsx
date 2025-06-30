"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ProductInfo() {

  return (
    <><div className="flex flex-row gap-8">
          <div>
            <p>Produto</p>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Mesa de madeira" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Mesa de madeira</SelectItem>
                <SelectItem value="dark">Cadeira</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <p>Quantidade</p>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="1" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Mesa de madeira</SelectItem>
                <SelectItem value="dark">Cadeira</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <label htmlFor="owner">Responsável</label>
        <Input type="text" id="owner" placeholder="Ex: Marcos Amorim Rodrigues" className="mb-2" />
        <label htmlFor="description">Descrição</label>
        <Textarea placeholder="Ex: Venda realizada na loja" className="h-24"></Textarea>
        </>
  );
}
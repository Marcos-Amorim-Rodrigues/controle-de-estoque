"use client"

import { ColumnDef } from "@tanstack/react-table"

import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type Payment = {
  id: string
  owner: string
  type: string
  product: string
  date: string 
  amount: number
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "owner",
    header: "Responsável",
  },
  {
    accessorKey: "type",
    header: "Tipo",
  },
  {
    accessorKey: "product",
    header: "Produto",
  },
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "amount",
    header: "Quantidade",
  },
]
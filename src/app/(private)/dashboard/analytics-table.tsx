"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { month: "Janeiro", vendas: 186 },
  { month: "Fevereiro", vendas: 305 },
  { month: "Março", vendas: 237 },
  { month: "Abril", vendas: 73 },
  { month: "Maio", vendas: 209 },
  { month: "Junho", vendas: 214 },
  { month: "Julho", vendas: 321 },
  { month: "Agosto", vendas: 54 },
  { month: "Setembro", vendas: 98 },
  { month: "Outubro", vendas: 254 },
  { month: "Novembro", vendas: 333 },
  { month: "Dezembro", vendas: 200 },
]

const chartConfig = {
  vendas: {
    label: "vendas",
    color: "#000",
  },
} satisfies ChartConfig

export default function AnalyticsTable() {
  
  return (
    <div className="w-full border-2 h-auto rounded-2xl p-8">
      <div>
        <p className="font-bold text-xl mb-4">Visão geral</p>
      </div>
      <div className="flex w-full justify-center items-center">
        <ChartContainer config={chartConfig} className="min-h-[200px] lg:w-1/2">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              dataKey="vendas"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="vendas" fill="var(--color-vendas)" radius={4} />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}
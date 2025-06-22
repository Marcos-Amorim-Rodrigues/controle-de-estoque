"use client";

import { ChartNoAxesCombined, CreditCard, DollarSign, Users } from "lucide-react";
import MainDataDiv from "./main-data-layout";

export default function MainDataDivs() {
  
  return (
    <>
      <MainDataDiv>
        <div className="flex flex-row justify-between items-center">
          <p>Total em estoque</p>
          <DollarSign size={16} />
        </div>
        <p className="font-bold text-3xl">R$45.231,89</p>
      </MainDataDiv>
      <MainDataDiv>
        <div className="flex flex-row justify-between items-center">
          <p>Movimentações</p>
          <Users size={16} />
        </div>
        <p className="font-bold text-3xl">251</p>
      </MainDataDiv>
      <MainDataDiv>
        <div className="flex flex-row justify-between items-center">
          <p>Total de produtos</p>
          <CreditCard size={16} />
        </div>
        <p className="font-bold text-3xl">127</p>
      </MainDataDiv>
      <MainDataDiv>
        <div className="flex flex-row justify-between items-center">
          <p>Total em saídas</p>
          <ChartNoAxesCombined size={16} />
        </div>
        <p className="font-bold text-3xl">R$93.421,53</p>
      </MainDataDiv>     
    </>
  );
}

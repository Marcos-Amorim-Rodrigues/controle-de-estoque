import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      owner: "Marcos Amorim Rodrigues",
      type: "Venda",
      product: "Mesa de jantar 6 lugares",
      date: "2025-01-01T12:00:00Z",
      amount: 1,
    },
    {
      id: "728ed52e",
      owner: "Robson Pinto Soares",
      type: "Estoque",
      product: "Tapete cinza 2x3",
      date: "2025-01-01T12:00:00Z",
      amount: 15,
    },
    {
      id: "728ed52d",
      owner: "Vitor Alvarenga Soares",
      type: "Venda",
      product: "Mesa de jantar 6 lugares",
      date: "2025-01-01T12:00:00Z",
      amount: 2,
    },
    {
      id: "728ed52a",
      owner: "Gabriel Nunes Fortes",
      type: "Venda",
      product: "Cama box casal",
      date: "2025-01-01T12:00:00Z",
      amount: 1,
    },
    // ...
  ]
}

export default async function ProductListPage() {
const data = await getData()

  return (
    <div className="w-full flex flex-col justify-between p-4">
      <h1 className="text-2xl font-bold">Relatório</h1>
      <p className="text-gray-400 mb-6">Movimentações realizadas</p>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}
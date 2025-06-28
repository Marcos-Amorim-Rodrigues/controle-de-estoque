import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      name: "Mesa de madeira Cerrana",
      amount: 0,
      status: "Em falta",
      price: 499.99,
      createdAt: "2024-07-21T10:42:00Z",
    },
    {
      id: "728ed52e",
      name: "Cadeira para mesa Mista",
      amount: 100,
      status: "Ativo",
      price: 129.99,
      createdAt: "2024-10-18T03:21:00Z",
    },
    {
      id: "728ed52c",
      name: "Sofá 4 lugares Aramis",
      amount: 50,
      status: "Ativo",
      price: 899.99,
      createdAt: "2024-11-29T08:15:00Z",
    },
    {
      id: "728ed52a",
      name: "Poltrona estofada Stark",
      amount: 0,
      status: "Em falta",
      price: 249.99,
      createdAt: "2024-12-25T11:59:00Z",
    },
    {
      id: "728ed52j",
      name: "Centro de mesa de madeira",
      amount: 75,
      status: "Ativo",
      price: 159.99,
      createdAt: "2025-01-01T12:00:00Z",
    },
    {
      id: "728ed51x",
      name: "Luminária de sala",
      amount: 30,
      status: "Ativo",
      price: 199.99,
      createdAt: "2025-02-14T02:14:00Z",
    },
    // ...
  ]
}

export default async function ProductListPage() {
const data = await getData()

  return (
    <div className="w-full flex flex-col justify-between p-4">
      <h1 className="text-2xl font-bold">Produtos</h1>
      <p className="text-gray-400 mb-6">Gerencie e acompanhe seus produtos.</p>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}
import { ChartLine, Home, Package2, ShoppingBasket, ShoppingCart, Users } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Cadastro de produtos",
    url: "/cadastro-produtos",
    icon: ShoppingCart,
  },
  {
    title: "Listar produtos",
    url: "/listar-produtos",
    icon: ShoppingBasket,
  },
  {
    title: "Movimentações",
    url: "/movimentacoes",
    icon: Users,
  },
  {
    title: "Relatórios",
    url: "/relatorios",
    icon: ChartLine,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex justify-center items-center gap-2">
            <Package2 />
            <p className="italic font-bold text-[16px]">ControleDeEstoque</p>
            </SidebarGroupLabel>
          <hr className="my-5" />
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="h-10" asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

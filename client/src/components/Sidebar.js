"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  UserCog,
  BarChart3,
  Clock,
  LogOut,
  Store,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/" },
  { name: "Vendas", icon: ShoppingCart, href: "/vendas" },
  { name: "Produtos", icon: Package, href: "/produtos" },
  { name: "Clientes", icon: Users, href: "/clientes" },
  { name: "Funcionários", icon: UserCog, href: "/funcionarios" },
  { name: "Relatórios", icon: BarChart3, href: "/relatorios" },
  { name: "Registro de Ponto", icon: Clock, href: "/registro-ponto" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="app-sidebar fixed left-0 top-0 z-20 flex h-screen w-[250px] flex-col border-r border-slate-800 bg-slate-950 text-white">
      <div className="border-b border-white/10 px-5 py-6">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-ponto-facil.svg"
            alt="Logo Ponto Fácil"
            width={42}
            height={42}
            priority
          />
          <div>
            <h1 className="text-base font-bold tracking-tight text-white">Ponto Fácil</h1>
            <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Gestão do negócio</p>
          </div>
        </div>
        <div className="mt-5 flex items-center gap-2 rounded-md bg-white/[0.06] px-3 py-2 text-xs text-slate-300">
          <Store size={15} className="text-teal-300" /> Unidade principal
        </div>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-5">
        <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Espaço de trabalho</p>
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 border-l-2 px-3 py-2.5 text-[13px] transition-all ${
                isActive
                  ? "border-teal-300 bg-white/[0.09] font-semibold text-white"
                  : "border-transparent text-slate-400 hover:bg-white/[0.05] hover:text-white"
              }`}
            >
              <item.icon size={18} strokeWidth={1.8} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-3">
        <div className="flex items-center gap-3 bg-white/[0.05] p-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-700 text-sm font-bold text-white">
            A
          </div>

          <div className="flex-1">
            <p className="text-sm font-bold text-white">Admin</p>
            <p className="text-xs text-slate-400">Gerente</p>
          </div>

          <button className="text-gray-400 hover:text-red-500">
            <LogOut size={17} />
          </button>
        </div>
      </div>
    </aside>
  );
}

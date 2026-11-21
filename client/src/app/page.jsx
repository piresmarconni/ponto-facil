"use client";

import Link from "next/link";
import { useState } from "react";
import {
  BadgeHelp,
  BarChart3,
  Clock,
  HelpCircle,
  Package,
  ShoppingCart,
  UserCog,
  Users,
  X,
} from "lucide-react";

const atalhos = [
  {
    tecla: "F1",
    acao: "Abrir ajuda",
    descricao: "Mostra a lista de atalhos disponiveis no sistema.",
  },
  {
    tecla: "ESC",
    acao: "Sair / fechar",
    descricao: "Fecha a ajuda aberta. Fora da ajuda, volta para o dashboard.",
  },
  {
    tecla: "F2",
    acao: "Vendas",
    descricao: "Abre o caixa para registrar uma nova venda.",
    href: "/vendas",
  },
  {
    tecla: "F3",
    acao: "Produtos",
    descricao: "Abre o cadastro e controle de estoque.",
    href: "/produtos",
  },
  {
    tecla: "F4",
    acao: "Clientes",
    descricao: "Abre a base de clientes e seus contatos.",
    href: "/clientes",
  },
  {
    tecla: "F6",
    acao: "Funcionarios",
    descricao: "Abre o cadastro da equipe.",
    href: "/funcionarios",
  },
  {
    tecla: "F7",
    acao: "Relatorios",
    descricao: "Abre os indicadores e pendencias financeiras.",
    href: "/relatorios",
  },
  {
    tecla: "F8",
    acao: "Ponto",
    descricao: "Abre o registro de ponto dos funcionarios.",
    href: "/registro-ponto",
  },
  {
    tecla: "F12",
    acao: "Ajuda tecnica",
    descricao:
      "Mostra este help com um aviso: no navegador, F12 tambem pode abrir as ferramentas de desenvolvedor.",
  },
];

const cards = [
  {
    titulo: "Nova venda",
    texto: "Abrir caixa, buscar produtos e finalizar pagamento.",
    href: "/vendas",
    tecla: "F2",
    icon: ShoppingCart,
  },
  {
    titulo: "Estoque",
    texto: "Cadastrar produto, conferir preco e quantidade.",
    href: "/produtos",
    tecla: "F3",
    icon: Package,
  },
  {
    titulo: "Clientes",
    texto: "Consultar contatos e dados cadastrais.",
    href: "/clientes",
    tecla: "F4",
    icon: Users,
  },
  {
    titulo: "Equipe",
    texto: "Gerenciar funcionarios, cargos e salarios.",
    href: "/funcionarios",
    tecla: "F6",
    icon: UserCog,
  },
  {
    titulo: "Relatorios",
    texto: "Ver resumo de vendas e produtos vendidos.",
    href: "/relatorios",
    tecla: "F7",
    icon: BarChart3,
  },
  {
    titulo: "Ponto",
    texto: "Registrar entrada, saida e horarios de almoco.",
    href: "/registro-ponto",
    tecla: "F8",
    icon: Clock,
  },
];

function ShortcutHelp({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 p-4">
      <section className="w-full max-w-3xl border border-slate-200 bg-white shadow-2xl">
        <header className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <div className="flex items-center gap-3">
            <BadgeHelp size={22} className="text-sky-600" />
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Ajuda de atalhos
              </h2>
              <p className="text-sm text-slate-500">
                Comandos de teclado para navegar mais rapido.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="border border-slate-200 p-2 text-slate-500 hover:bg-slate-100"
            aria-label="Fechar ajuda"
            title="Fechar ajuda"
          >
            <X size={18} />
          </button>
        </header>

        <div className="max-h-[70vh] overflow-y-auto">
          <table className="w-full text-left">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-6 py-3">Tecla</th>
                <th className="px-6 py-3">Acao</th>
                <th className="px-6 py-3">O que faz</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {atalhos.map((atalho) => (
                <tr key={atalho.tecla}>
                  <td className="px-6 py-4">
                    <kbd className="border border-slate-300 bg-slate-100 px-3 py-1 font-mono text-xs font-bold text-slate-800">
                      {atalho.tecla}
                    </kbd>
                  </td>
                  <td className="px-6 py-4 font-semibold text-slate-800">
                    {atalho.acao}
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    {atalho.descricao}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default function HomePage() {
  const [helpAberto, setHelpAberto] = useState(false);

  return (
    <div className="min-h-screen p-5 sm:p-8 lg:p-10">
      <div className="mb-7 flex items-center justify-between border-b border-slate-200 pb-5">
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-teal-700">
            Visão geral · Hoje
          </p>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">Bom dia, equipe</h1>
          <p className="mt-1 max-w-2xl text-sm text-slate-500">
            Seu espaço de trabalho para acompanhar a operação e acessar as rotinas do negócio.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setHelpAberto(true)}
          className="inline-flex items-center gap-2 border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 hover:border-teal-500 hover:text-teal-800"
        >
          <HelpCircle size={18} />
          Ajuda F1
        </button>
      </div>

      <section className="mb-7 grid grid-cols-1 gap-5 lg:grid-cols-[1.3fr_1fr]">
        <Link href="/vendas" className="group relative flex min-h-52 flex-col justify-between overflow-hidden bg-slate-900 p-7 text-white transition hover:bg-slate-800">
          <div className="absolute -right-10 -top-16 h-64 w-64 rounded-full border border-white/10" />
          <div className="relative">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-teal-300">Acesso rápido · F2</span>
            <h2 className="mt-3 text-3xl font-black tracking-tight">Começar uma venda</h2>
            <p className="mt-2 text-sm text-slate-300">Abra o caixa, encontre produtos e registre o pagamento.</p>
          </div>
          <span className="relative mt-6 inline-flex w-fit items-center gap-2 border-b border-teal-300 pb-1 text-sm font-bold text-teal-200">Abrir caixa <span aria-hidden="true">→</span></span>
        </Link>
        <div className="grid grid-cols-2 gap-px border border-slate-200 bg-slate-200">
          <div className="bg-white p-5"><span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Vendas</span><p className="mt-4 text-2xl font-black text-slate-900">F2</p><p className="mt-1 text-xs text-slate-500">Abrir caixa</p></div>
          <div className="bg-white p-5"><span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Ajuda</span><p className="mt-4 text-2xl font-black text-slate-900">F1</p><p className="mt-1 text-xs text-slate-500">Ver comandos</p></div>
          <div className="col-span-2 flex items-center justify-between bg-white px-5 py-4"><div><p className="text-sm font-bold text-slate-800">Navegue pelo teclado</p><p className="mt-1 text-xs text-slate-500">Acesse as áreas sem interromper seu fluxo.</p></div><span className="font-mono text-xs text-slate-400">F2 — F8</span></div>
        </div>
      </section>

      <div className="mb-3 flex items-end justify-between">
        <div><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-teal-700">Operação</p><h2 className="mt-1 text-xl font-black text-slate-900">Acessos do negócio</h2></div>
        <span className="text-xs text-slate-500">Selecione uma área para continuar</span>
      </div>
      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map(({ titulo, texto, href, tecla, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="group border border-slate-200 bg-white p-5 transition-colors hover:border-teal-500 hover:bg-teal-50/40"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="inline-flex h-10 w-10 items-center justify-center border border-slate-200 bg-slate-50 text-slate-700 group-hover:border-sky-300 group-hover:text-sky-700">
                <Icon size={19} />
              </span>
              <kbd className="border border-slate-200 bg-slate-50 px-2 py-1 font-mono text-[10px] font-bold text-slate-500">
                {tecla}
              </kbd>
            </div>
            <h2 className="text-lg font-black text-slate-900">{titulo}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">{texto}</p>
          </Link>
        ))}
      </section>

      {helpAberto && <ShortcutHelp onClose={() => setHelpAberto(false)} />}
    </div>
  );
}

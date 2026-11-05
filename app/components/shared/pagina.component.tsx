"use client"

import Link from "next/link"
import { House, LogOut } from "lucide-react"

type PaginaProps = {
  children?: React.ReactNode;
  titulo?: string;
  subtitulo?: string;
};

export default function Pagina({ children, titulo, subtitulo }: PaginaProps) {
  function sair() {
    console.log("Saindo da conta...")
  }

  return (
    <div className="flex min-h-screen text-slate-100">
      
      {/* SIDEBAR */}
      <aside className="flex flex-col justify-between bg-blue-900 w-64 p-6">
        <div className="flex flex-col gap-6">
          <h1 className="font-black text-xl">Logo</h1>
          
          {/* Menu direto */}
          <nav className="flex flex-col gap-2">
            <Link 
              href="/" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-800 text-white font-medium hover:bg-blue-700 transition-colors"
            >
              <House className="w-5 h-5" />
              <span>Home</span>
            </Link>
          </nav>
        </div>

        {/* Botão de Sair no rodapé */}
        <div className="pt-4 border-t border-blue-800">
          <button 
            onClick={sair}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-red-950/50 hover:bg-red-900/60 transition-colors text-sm font-medium text-red-200 border border-red-900/50"
          >
            <LogOut className="w-5 h-5" />
            <span>Sair</span>
          </button>
        </div>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="p-6 flex flex-col gap-6 bg-white flex-1">
        {titulo && (
          <div>
            <h1 className="text-2xl text-blue-900 font-bold">{titulo}</h1>
            {subtitulo && <p className="text-blue-900 text-sm">{subtitulo}</p>}
          </div>
        )}
        {children}
      </main> 
    </div>
  )
}

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { House, UserPlus, LogOut } from "lucide-react";

type PaginaProps = {
  children?: React.ReactNode;
  titulo?: string;
  subtitulo?: string;
};

export default function Pagina({
  children,
  titulo,
  subtitulo,
}: PaginaProps) {
  const router = useRouter();
  function sair() {
    console.log("Saindo da conta...");
    router.push("/login");
  }

  return (
    <div className="flex min-h-screen text-slate-100">
      {/* Menu lateral */}
      <aside className="flex w-64 flex-col justify-between bg-blue-900 p-6">
        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-black">Swaply</h1>

          <nav className="flex flex-col gap-2">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg bg-blue-800 px-4 py-3 font-medium text-white hover:bg-blue-700"
            >
              <House className="h-5 w-5" />
              <span>Mural de Trocas</span>
            </Link>
          </nav>
        </div>

        {/* Botão existente */}
        <div className="border-t border-blue-800 pt-4">
          <button
            onClick={sair}
            className="flex w-full items-center gap-3 rounded-lg border border-red-900/50 bg-red-950/50 px-4 py-3 text-sm font-medium text-red-200 hover:bg-red-900/60"
          >
            <LogOut className="h-5 w-5" />
            <span>Sair</span>
          </button>
        </div>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex flex-1 flex-col gap-6 bg-white p-6">
        {titulo && (
          <div>
            <h1 className="text-2xl font-bold text-blue-900">
              {titulo}
            </h1>

            {subtitulo && (
              <p className="text-sm text-blue-900">
                {subtitulo}
              </p>
            )}
          </div>
        )}

        {children}
      </main>
    </div>
  );
}

"use client";

import { X } from "lucide-react";

type Item = {
  id: string;
  categoria: string;
  estado: string;
  titulo: string;
  descricao: string;
  contato: string;
};

type ModalDetalhesProps = {
  item: Item | null;
  aoFechar: () => void;
};

export default function ModalDetalhes({
  item,
  aoFechar,
}: ModalDetalhesProps) {
  if (!item) return null;

  return (
    /* Fundo escurecido */
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      {/* Card do Modal */}
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        {/* Cabeçalho */}
        <div className="flex items-center justify-between pb-4">
          <h2 className="text-xl font-bold text-slate-900">
            Detalhes do Item
          </h2>
          <button
            onClick={aoFechar}
            className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Badges / Tags */}
        <div className="mb-5 flex items-center gap-2">
          <span className="rounded-full bg-slate-100 px-3.5 py-1 text-xs font-medium text-slate-800">
            {item.categoria}
          </span>
          <span className="rounded-full bg-blue-50 px-3.5 py-1 text-xs font-medium text-blue-600">
            Estado: {item.estado}
          </span>
        </div>

        {/* Título */}
        <h3 className="mb-3 text-lg font-bold text-slate-900">
          {item.titulo}
        </h3>

        {/* Descrição */}
        <p className="mb-6 text-sm leading-relaxed text-slate-600">
          {item.descricao}
        </p>

        {/* Meio de Contato */}
        <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            MEIO DE CONTATO
          </span>
          <p className="mt-1 text-sm font-bold text-slate-900">
            {item.contato}
          </p>
        </div>
      </div>
    </div>
  );
}
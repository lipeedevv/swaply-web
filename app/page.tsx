
"use client";

import { useState } from "react";
import Link from "next/link";
import Pagina from "./components/shared/pagina.component";

const itens = [
  {
    id: 1,
    nome: "Livro de Programação",
    categoria: "Livros",
    descricao: "Livro em bom estado de conservação.",
  },
  {
    id: 2,
    nome: "Fone de Ouvido",
    categoria: "Eletrônicos",
    descricao: "Fone funcionando normalmente.",
  },
  {
    id: 3,
    nome: "Mochila",
    categoria: "Acessórios",
    descricao: "Mochila usada, em ótimo estado.",
  },
];

export default function Home() {
  const [pesquisa, setPesquisa] = useState("");

  const itensFiltrados = itens.filter((item) =>
    item.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <Pagina
      titulo="Mural de Trocas"
      subtitulo="Encontre itens disponíveis para troca."
    >
      <section className="mural-conteudo">
        <input
          type="text"
          placeholder="Pesquisar itens..."
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
          className="mural-pesquisa"
          aria-label="Pesquisar itens"
        />

        <div className="mural-lista">
          {itensFiltrados.map((item) => (
            <div key={item.id} className="mural-card">
              <h2 className="mural-titulo">{item.nome}</h2>

              <p className="mural-categoria">{item.categoria}</p>

              <p className="mural-descricao">{item.descricao}</p>

              <Link
                href={`/item/${item.id}`}
                className="mural-botao"
              >
                Ver detalhes
              </Link>
            </div>
          ))}
        </div>

        {itensFiltrados.length === 0 && (
          <p className="mural-vazio">Nenhum item encontrado.</p>
        )}
      </section>
    </Pagina>
  );
}

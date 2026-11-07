"use client";

import { useState } from "react";
import Pagina from "./components/shared/pagina.component";
import ModalDetalhes from "./components/shared/modal-detalhes.component";

const itens = [
  {
    id: "1",
    nome: "Livro de Programação",
    categoria: "Livros",
    estado: "Bom",
    descricao: "Livro em bom estado de conservação.",
    contato: "joao@email.com",
  },
  {
    id: "2",
    nome: "Fone de Ouvido",
    categoria: "Eletrônicos",
    estado: "Seminovo",
    descricao: "Fone funcionando normalmente.",
    contato: "maria@email.com",
  },
  {
    id: "3",
    nome: "Mochila",
    categoria: "Acessórios",
    estado: "Usado",
    descricao: "Mochila usada, em ótimo estado.",
    contato: "carlos@email.com",
  },
];

export default function Home() {
  const [pesquisa, setPesquisa] = useState("");
  const [itemSelecionado, setItemSelecionado] = useState<any>(null);

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

              {/* Botão para ver detalhes */}
              <button
                onClick={() =>
                  setItemSelecionado({
                    id: String(item.id),
                    titulo: item.nome,
                    categoria: item.categoria,
                    estado: item.estado,
                    descricao: item.descricao,
                    contato: item.contato,
                  })
                }
                className="mural-botao"
              >
                Ver detalhes
              </button>
            </div>
          ))}
        </div>

        {itensFiltrados.length === 0 && (
          <p className="mural-vazio">Nenhum item encontrado.</p>
        )}

        {/* Modal Detalhes */}
        <ModalDetalhes
          item={itemSelecionado}
          aoFechar={() => setItemSelecionado(null)}
        />
      </section>
    </Pagina>
  );
}
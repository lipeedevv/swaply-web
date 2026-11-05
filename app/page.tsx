import Pagina from "./components/shared/pagina.component"

export default function Home() {
  return (
    <Pagina titulo="Página inicial" subtitulo="Bem-vindo ao Mural de Trocas!">
      <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
        <p className="text-gray-300">Conteúdo da página Home</p>
      </div>
    </Pagina>
  )
}
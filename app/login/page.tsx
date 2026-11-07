"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Input from "../components/shared/input.component";
import Button from "../components/shared/button.component";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function entrar(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    if (!email.trim() || !senha) {
      alert("Preencha todos os campos.");
      return;
    }

    router.push("/");
  }

  return (
    <main className="pagina-cadastro">
      <div className="card-cadastro">
        <h1 className="titulo-cadastro">Swaply</h1>
        <h2 className="subtitulo-cadastro">Entrar</h2>

        <form onSubmit={entrar} className="formulario-cadastro">
          <Input
            id="email"
            label="E-mail"
            tipo="email"
            valor={email}
            aoAlterar={setEmail}
          />

          <Input
            id="senha"
            label="Senha"
            tipo="password"
            valor={senha}
            aoAlterar={setSenha}
          />

          <Button texto="Entrar" tipo="submit" />
        </form>

        <p className="texto-login">
          Não possui uma conta?{" "}
          <Link href="/cadastro" className="link-login">
            Cadastrar-se
          </Link>
        </p>
      </div>
    </main>
  );
}
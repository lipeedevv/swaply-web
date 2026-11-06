
"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "../components/shared/input.component";
import Button from "../components/shared/button.component";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  function cadastrar(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    console.log("Formulário preenchido:", {
      nome,
      email,
      senhasCoincidem: senha === confirmarSenha,
    });
  }

  return (
    <main className="pagina-cadastro">
      <div className="card-cadastro">
        <h1 className="titulo-cadastro">Swaply</h1>
        <h2 className="subtitulo-cadastro">Criar conta</h2>

        <form onSubmit={cadastrar} className="formulario-cadastro">
          <Input
            id="nome"
            label="Nome completo"
            valor={nome}
            aoAlterar={setNome}
          />

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

          <Input
            id="confirmarSenha"
            label="Confirmar senha"
            tipo="password"
            valor={confirmarSenha}
            aoAlterar={setConfirmarSenha}
          />

          <Button texto="Cadastrar" tipo="submit" />
        </form>

        <p className="texto-login">
          Já possui uma conta?{" "}
          <Link href="/login" className="link-login">
            Entrar
          </Link>
        </p>
      </div>
    </main>
  );
}

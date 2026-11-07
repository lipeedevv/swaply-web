type ButtonProps = {
  texto: string;
  tipo?: "button" | "submit";
};

export default function Button({
  texto,
  tipo = "button",
}: ButtonProps) {
  return (
    <button type={tipo} className="botao-primario">
      {texto}
    </button>
  );
}
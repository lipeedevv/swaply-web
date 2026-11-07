type InputProps = {
  id: string;
  label: string;
  tipo?: string;
  valor: string;
  aoAlterar: (valor: string) => void;
};

export default function Input({
  id,
  label,
  tipo = "text",
  valor,
  aoAlterar,
}: InputProps) {
  return (
    <div className="campo-formulario">
      <label htmlFor={id}>{label}</label>

      <input
        id={id}
        type={tipo}
        value={valor}
        onChange={(e) => aoAlterar(e.target.value)}
        required
      />
    </div>
  );
}
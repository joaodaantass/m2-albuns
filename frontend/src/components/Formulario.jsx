import { useState } from "react";

function Formulario({ onCadastrar }) {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [ano, setAno] = useState("");
  const [avaliacao, setAvaliacao] = useState("");

  async function enviar(e) {
    e.preventDefault();
    const aceito = await onCadastrar({ titulo, autor, ano, avaliacao });

    if (aceito) {
      setTitulo("");
      setAutor("");
      setAno("");
      setAvaliacao("");
    }
  }

  return (
    <form onSubmit={enviar}>
      <input
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <input
        placeholder="Autor"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
      />
      <input
        type="number"
        placeholder="Ano"
        value={ano}
        onChange={(e) => setAno(e.target.value)}
      />
      <input
        type="number"
        step="0.1"
        placeholder="Avaliação"
        value={avaliacao} 
        onChange={(e) => setAvaliacao(e.target.value)}
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default Formulario;
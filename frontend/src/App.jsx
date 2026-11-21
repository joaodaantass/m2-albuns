import { useState, useEffect } from "react";
import Resumo from "./components/Resumo";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";

const API = "http://127.0.0.1:8000/api/albuns/";

function App() {
  const [albuns, setAlbuns] = useState([]);
  const [resumo, setResumo] = useState(null);
  const [erro, setErro] = useState("");
  const [busca, setBusca] = useState("");

  async function carregarLista() {
    const res = await fetch(API);
    setAlbuns(await res.json());
  }

  async function carregarResumo() {
    const res = await fetch(API + "resumo/");
    setResumo(await res.json());
  }

  useEffect(() => {
    carregarLista();
    carregarResumo();
  }, []);

  async function cadastrar(novo) {
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novo),
    });
    const dados = await res.json();

    if (!res.ok) {
      setErro(dados.erro);
      return false;
    }

    setErro("");
    await carregarLista();
    await carregarResumo();
    return true;
  }

  const albunsFiltrados = albuns.filter((album) =>
    album.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div>
      <h1>Minha Coleção de Álbuns</h1>

      <Resumo resumo={resumo} />

      <Formulario onCadastrar={cadastrar} />
      {erro && <p style={{ color: "red" }}>{erro}</p>}

      <input
        type="text"
        placeholder="Buscar por título..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      <Lista albuns={albunsFiltrados} />
    </div>
  );
}

export default App;
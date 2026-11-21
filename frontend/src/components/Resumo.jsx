function Resumo({ resumo }) {
  if (!resumo) return <p>Resumo</p>;

  return (
    <div>
      <p>Total: {resumo.total}</p>
      <p>Média das notas: {resumo.media_avaliacao}</p>
      <p>Melhor álbum: {resumo.melhor ?? "-"}</p>
    </div>
  );
}

export default Resumo;
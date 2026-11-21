function Lista({ albuns }) {
  if (albuns.length === 0) {
    return <p>Nenhum item encontrado</p>;
  }

  return (
    <ul>
      {albuns.map((album) => (
        <li key={album.id}>
          {album.titulo} - {album.autor} ({album.ano}) - avaliacao {album.avaliacao}
        </li>
      ))}
    </ul>
  );
}

export default Lista;
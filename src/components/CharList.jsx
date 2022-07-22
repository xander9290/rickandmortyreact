import { useEffect, useState } from "react";
import Char from "./Char";

function NavPage({ page, setPage, count }) {
  const anterior = () => {
    if (page === 1) return;
    setPage(page - 1);
  };
  const siguiente = () => {
    setPage(page + 1);
  };

  const Botonera = () => {
    return (
      <div
        id="botonera"
        style={{ overflowX: "scroll" }}
        className="d-flex mx-1"
      >
        {(function () {
          let buttons = [];
          for (let i = 0; i < count; i++) {
            buttons.push(
              <button
                onClick={() => setPage(i + 1)}
                key={i}
                className={`btn ${
                  i + 1 === page ? "btn-info" : ""
                } btn-sm border mx-1`}
                type="button"
              >
                {i + 1}
              </button>
            );
          }
          return buttons;
        })()}
      </div>
    );
  };
  return (
    <header className="d-flex justify-content-between align-items-center">
      <button
        onClick={anterior}
        className="btn btn-primary btn-sm"
        type="button"
      >
        Anterior
      </button>
      <Botonera />
      <button
        onClick={siguiente}
        className="btn btn-primary btn-sm"
        type="button"
      >
        Siguiente
      </button>
    </header>
  );
}

function CharList() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(826);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data = await res.json();
    setLoading(false);
    setCharacters(data.results);
  };

  return (
    <div className="container bg-secondary pt-2">
      <NavPage page={page} setPage={setPage} count={count} />
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="row">
          {characters.map((char) => (
            <div key={char.id} className="col-md-4">
              <Char char={char} />
            </div>
          ))}
        </div>
      )}
      <NavPage page={page} setPage={setPage} count={count} />
    </div>
  );
}

export default CharList;

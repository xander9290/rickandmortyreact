function Char({ char }) {
  return (
    <div className="text-center p-5">
      <h4 className="p-0">{char.name}</h4>
      <img
        className="img-fluid rounded-pill"
        src={char.image}
        alt={char.name}
      />
      <p>{char.origin.name}</p>
    </div>
  );
}

export default Char;

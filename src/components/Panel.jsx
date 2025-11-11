function Panel({ title, children, isActive, onShow }) {
  return (
    <section>
      <h3>{title}</h3>
      {isActive ? children : <button onClick={onShow}>Show</button>}
    </section>
  );
}

export default Panel;

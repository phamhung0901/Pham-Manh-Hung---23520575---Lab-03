function Panel({ title, children, isActive, onShow }) {
  return (
    <section aria-label={title} tabIndex={0} style={{ marginBottom: 12 }}>
      <h3>{title}</h3>
      {isActive ? children : <button onClick={onShow}>Show</button>}
    </section>
  );
}

export default Panel;

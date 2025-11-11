function Card({ title, children, variant = 'default', icon }) {
  return (
    <div className={`card card-${variant}`} aria-label={title || 'Card'}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {icon && <span style={{ fontSize: 22 }}>{icon}</span>}
        <h2 style={{ margin: 0 }}>{title}</h2>
      </div>
      <hr />
      {children ? children : <div style={{ color: '#9ca3af' }}>No content</div>}
    </div>
  );
}

export default Card;

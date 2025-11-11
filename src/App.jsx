// ...existing code...
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import Login from './components/Login';
import Card from './components/Card';
import Accordion from './components/Accordion';
import TodoApp from './todo/TodoApp';
// ...existing code...

function App() {
  const user1 = { name: 'Thanh Thu', email: 'Thanhthu@gmail.com' };
  const user2 = { name: 'Minh Quan', email: 'MinhQuan@mail.com' };

  const styles = {
    app: {
      fontFamily: '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
      background: '#f4f7fb',
      color: '#1f2937',
      minHeight: '100vh',
      paddingBottom: 40,
    },
    header: {
      background: '#ffffff',
      borderBottom: '1px solid #e6edf3',
      boxShadow: '0 1px 0 rgba(16,24,40,0.03)',
      padding: '18px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      position: 'sticky',
      top: 0,
      zIndex: 20,
    },
    brand: { display: 'flex', alignItems: 'center', gap: 12 },
    logo: {
      width: 44,
      height: 44,
      borderRadius: 8,
      background: 'linear-gradient(135deg,#6366f1,#06b6d4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 700,
      fontSize: 18,
      boxShadow: '0 6px 18px rgba(99,102,241,0.12)',
    },
    title: { fontSize: 18, margin: 0 },
    subtitle: { color: '#6b7280', fontSize: 13, margin: 0 },

    container: {
      maxWidth: 1100,
      margin: '24px auto',
      padding: '0 20px',
    },

    hero: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' },

    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: 20,
      marginTop: 18,
    },

    footer: {
      marginTop: 28,
      textAlign: 'center',
      color: '#9ca3af',
      fontSize: 13,
    },

    smallMuted: { color: '#6b7280', fontSize: 13 },
    actions: { display: 'flex', gap: 10, alignItems: 'center' },
    search: {
      padding: '8px 12px',
      borderRadius: 8,
      border: '1px solid #e6edf3',
      background: '#fbfdff',
      minWidth: 180,
    },
  };

  return (
    <div style={styles.app}>
      <header style={styles.header} role="banner">
        <div style={styles.brand}>
          <div style={styles.logo} aria-hidden>
            RL
          </div>
          <div>
            <h1 style={styles.title}>React Lab 3 — Exercises</h1>
            <p style={styles.subtitle}>Small interactive examples and a compact demo to practice React fundamentals</p>
          </div>
        </div>

        <div style={styles.actions}>
          <input style={styles.search} aria-label="Search exercises" placeholder="Search exercises..." />
        </div>
      </header>

      <main style={styles.container}>
        <section style={styles.hero} aria-labelledby="page-intro">
          <div>
            <h2 id="page-intro" style={{ margin: 0 }}>Overview</h2>
            <p style={{ marginTop: 6, ...styles.smallMuted }}>
              Each card contains a focused exercise. Use the grid below to explore components and interactions.
            </p>
          </div>
          <div style={{ ...styles.actions, alignItems: 'center' }}>
            <span style={styles.smallMuted}>Signed in as</span>
            <div style={{ marginLeft: 8, fontWeight: 600 }}>{user1.name.split(' ')[0]}</div>
          </div>
        </section>

        <div style={styles.grid}>
          <div>
            <Card title="User Profiles" variant="elevated">
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <UserProfile userData={user1} theme="light" />
                <UserProfile userData={user2} theme="dark" />
              </div>
            </Card>
          </div>

          <div>
            <Card title="Counter" variant="compact">
              <Counter />
            </Card>
          </div>

          <div>
            <Card title="Login Form" variant="compact">
              <Login />
            </Card>
          </div>

          <div>
            <Card title="Accordion Example" variant="compact">
              <Accordion />
            </Card>
          </div>

          <div style={{ gridColumn: '1 / -1' }}>
            <Card title="Capstone: To-Do List" variant="full">
              <TodoApp />
            </Card>
          </div>
        </div>

        <footer style={styles.footer} role="contentinfo">
          <div>© {new Date().getFullYear()} React Lab • Built for learning</div>
          <div style={{ marginTop: 6 }}>
            <small style={styles.smallMuted}>Tip: try resizing the window — the layout adapts for narrow screens.</small>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
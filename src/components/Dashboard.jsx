import React, { useState } from 'react';
import UserProfile from './UserProfile';
import Counter from './Counter';
import Login from './Login';
import Card from './Card';
import Accordion from './Accordion';
import TodoApp from './todo/TodoApp';

const COMPONENTS = [
  { key: 'user', label: 'User Profile', component: <UserProfile userData={{ name: 'Demo User', email: 'demo@mail.com' }} /> },
  { key: 'counter', label: 'Counter', component: <Counter /> },
  { key: 'login', label: 'Login', component: <Login /> },
  { key: 'accordion', label: 'Accordion', component: <Accordion /> },
  { key: 'todo', label: 'Todo List', component: <TodoApp /> },
];

function Dashboard() {
  const [active, setActive] = useState('');

  React.useEffect(() => {
    setActive('user');
  }, []);

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 24 }}>
      <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Dashboard</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
        {COMPONENTS.map(btn => (
          <button
            key={btn.key}
            onClick={() => setActive(btn.key)}
            style={{
              background: active === btn.key ? 'linear-gradient(90deg,#6366f1,#06b6d4)' : '#e0e7ff',
              color: active === btn.key ? '#fff' : '#222',
              fontWeight: active === btn.key ? 600 : 400,
              border: 'none',
              borderRadius: 8,
              padding: '0.6em 1.2em',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(99,102,241,0.08)',
              transition: 'background 0.2s',
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>
      <Card title={COMPONENTS.find(c => c.key === active)?.label || ''}>
        {COMPONENTS.find(c => c.key === active)?.component}
      </Card>
    </div>
  );
}

export default Dashboard;

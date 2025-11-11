import { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setError('Username and password are required!');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setError('');
      alert('Login successful!');
      // Thực tế: gọi API đăng nhập ở đây
    }, 1000);
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Login form">
      <input
        name="username"
        type="password"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        aria-label="Username"
        required
      />
      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        aria-label="Password"
        required
      />
      <button type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>Preview: {formData.username}</p>
    </form>
  );
}

export default Login;

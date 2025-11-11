import PropTypes from 'prop-types';
import React, { useState } from 'react';

const users = [
  {
    name: 'Manh Hung',
    email: 'ManhHung@gmail.com',
    avatarUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
    theme: 'light',
  },
  {
    name: 'Quang Tu',
    email: 'QuangTu@mail.com',
    avatarUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
    theme: 'dark',
  },
];

function UserProfile() {
  const [activeIdx, setActiveIdx] = useState(0);
  const userData = users[activeIdx];

  if (!userData || !userData.name) {
    return (
      <div className={`profile-card theme-light`} aria-label="Empty user profile">
        <h3>No user data</h3>
        <p>Please provide user information.</p>
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
        {users.map((u, idx) => (
          <button
            key={u.email}
            onClick={() => setActiveIdx(idx)}
            style={{
              background: activeIdx === idx ? 'linear-gradient(90deg,#6366f1,#06b6d4)' : '#e0e7ff',
              color: activeIdx === idx ? '#fff' : '#222',
              fontWeight: activeIdx === idx ? 600 : 400,
              border: 'none',
              borderRadius: 8,
              padding: '0.4em 1em',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(99,102,241,0.08)',
              transition: 'background 0.2s',
            }}
          >
            {u.name}
          </button>
        ))}
      </div>
  <div className={`profile-card theme-${userData.theme}`} aria-label={`User profile for ${userData.name}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0 auto', maxWidth: 340 }}>
          <img
            src={userData.avatarUrl}
            alt={userData.name}
            width={userData.imageSize}
            height={userData.imageSize}
            className="profile-avatar"
          />
          <h3 style={{ color: userData.name === 'Quang Tu' ? '#fbfbfcff' : undefined, textAlign: 'center', margin: '0.5rem 0 0.2rem 0' }}>{userData.name}</h3>
          <p style={{ textAlign: 'center', margin: '0.2rem 0 0.5rem 0' }}>{userData.email}</p>
        </div>
    </div>
  );
}

UserProfile.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string
  }),
  theme: PropTypes.string
};

export default UserProfile;

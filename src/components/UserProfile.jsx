import PropTypes from 'prop-types';

function UserProfile({ userData, theme = 'light' }) {
  return (
    <div className={`profile-card theme-${theme}`}>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt={userData.name}
        width="90"
        height="90"
        className="profile-avatar"
      />
      <h3>{userData.name}</h3>
      <p>{userData.email}</p>
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

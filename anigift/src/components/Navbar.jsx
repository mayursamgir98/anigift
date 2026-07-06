export default function Navbar({ currentPage, onNavigate }) {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'login', label: 'Login' },
    { id: 'signup', label: 'Sign Up' },
  ];

  return (
    <nav className="navbar" id="navbar">
      <div className="logo" onClick={() => onNavigate('home')}>AniGift</div>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l.id}>
            <a
              className={currentPage === l.id ? 'active' : ''}
              onClick={() => onNavigate(l.id)}
            >
              {l.icon && <i className={l.icon} style={{ marginRight: 6 }}></i>}
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

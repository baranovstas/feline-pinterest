import { NavLink } from "react-router-dom";

import headerClasses from './Header.module.scss';

const Header = () => {
  const links = [
    { link: 'Все котики', path: '/' },
    { link: 'Любимые котики', path: '/likedCats' }
  ];

  return (
    <header className={headerClasses.header}>
      <div className={headerClasses.container}>
        <nav>
          <ul className={headerClasses.list}>
            {links.map(({ link, path }) => (
              <li key={link}>
                <NavLink
                  className={({ isActive }) => `${headerClasses.link} ${isActive && headerClasses.link_active}`}
                  to={path}
                >
                  {link}
                </NavLink>
              </li >
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
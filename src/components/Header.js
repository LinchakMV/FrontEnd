import React from 'react';

function Header() {
  return (
    <section className="home_wrap">
      <div className="home_menu">
        <p>&lt;/&gt;</p>
        <ul className="home_menu_list">
          <li className="home_menu_item active">
            <a href="#Home">Home</a>
          </li>
          <li className="home_menu_item">
            <a href="#About">About</a>
          </li>
          <li className="home_menu_item">
            <a href="#Skills">Skills</a>
          </li>
          <li className="home_menu_item">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="home_name">
        <h1>Lynchak Mykhailo</h1>
        <h3>Front-End Developer</h3>
      </div>
    </section>
  );
}

export default Header;

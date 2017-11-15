import React from 'react';

function Header() {
  // const time  = ['00:00', '03:00', '06:00','09:00','12:00','15:00','18:00','21:00'];
  // const timeRow = time.map((hour,index) => <div key={index} className='time-cell'>{hour}</div>);
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

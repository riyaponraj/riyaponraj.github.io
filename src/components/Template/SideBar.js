import React from 'react';
import { Link } from 'react-router-dom';

// import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Riya Ponraj</h2>
        <p><a href="mailto:riyaponraj07@gmail.com">riyaponraj07@gmail.com</a></p>
         <p><a href="mailto:ripo@uoregon.edu">ripo@uoregon.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I am Riya. I am a Computer Science Grad student. I am currently doing my PhD at the University of Oregon.
      </p>
    </section>

    <section id="footer">
      <p className="copyright">&copy; Riya Ponraj <Link to="/">riyaponraj.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;

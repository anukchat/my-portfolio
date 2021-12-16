import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Anukool Chaturvedi</h2>
        <p><a href="mailto:chaturvedianukool@gmail.com">chaturvedianukool@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Anukool. I like playing around data and generate intelligent insights from it,
        I am currently working at <a href="https://matroid.com">Avalara</a> as a Data Quality Engineer,
        I am also a Machine Learning freelancer. Before joining Avalara, I worked
        at <a href="https://tieto.com">Tieto</a>
        , <a href="https://fisglobal.com">FIS Global</a>
        , <a href="https://tcs.com">Tata Consultancy Services</a>
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Anukool Chaturvedi <Link to="/">anukchat.github.io/portfoluo</Link>.</p>
    </section>
  </section>
);

export default SideBar;

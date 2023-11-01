// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/library">Library</Link></li>
        <li><Link to="/faculty">Faculty</Link></li>
        <li><Link to="/attendance">Attendance</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/join">Join Now</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
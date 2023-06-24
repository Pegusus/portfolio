import React from 'react';
import {
	Header,
Nav,
NavLink,
NavMenu,
} from './NavbarElements';

const Navbar = ({ homeRef, projectsRef, blogRef, aboutMeRef, connectRef }) => {
  const scrollToSection = (e, ref) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-expressions
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Nav>
        <Header> Friendly Neighborhood Developer </Header>
        <NavMenu>
          <NavLink onClick={(e) => scrollToSection(e, homeRef)}>
            Home
          </NavLink>
          <NavLink onClick={(e) => scrollToSection(e, projectsRef)}>
            Projects
          </NavLink>
          <NavLink onClick={(e) => scrollToSection(e, blogRef)}>
            Blogs
          </NavLink>
          <NavLink onClick={(e) => scrollToSection(e, aboutMeRef)}>
            About Me
          </NavLink>
          <NavLink onClick={(e) => scrollToSection(e, connectRef)}>
            Connect
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};


export default Navbar;

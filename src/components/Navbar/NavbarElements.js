import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { Element } from 'react-scroll';

export const Nav = styled.nav`
background: transparent;
height: 85px;
display: flex;
color: #808080;
justify-content: space-around;
z-index: 12;
position:fixed;
width: 100%;
backdrop-filter: blur(5px);
`;

export const NavLink = styled(Link)`
color: #808080;
display: flex;
align-items: center;
color: #808080;
text-decoration: none;
padding: 1rem;
height: 100%;
cursor: pointer;
transition: color 0.2s ease-in-out;
&:hover {
color: white;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
text-color: #808080;
white-space: nowrap; 
`;

export const Header = styled.div`
display: flex;
align-items: center;
color: #808080;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;

export const ElementScroll = styled(Element)`
display: flex;
color: #808080;
background-color: bisque;
width: 80%;
height: 100vh;
margin-top: 50px;
align-items: center;
justify-content: center;
font-size: 2rem;
`

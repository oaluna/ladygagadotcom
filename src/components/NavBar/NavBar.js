import { Link } from 'react-router-dom'
import styled from 'styled-components';

const NavBar = styled.nav`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: #f16e70;
  background: transparent;
  font-size: 30px;
  letter-spacing: 0.6;
  font-weight: 600;
`

const StyledNavbar = () => (
  <NavBar>
    <Link to="/">HOME</Link>
    <Link to="/music">LISTEN</Link>
    <Link to="/tour">TOUR</Link>
    <Link to="/vegas">VEGAS</Link>
    <Link to="/signup">SIGN UP</Link>
    <Link to="/hauslabs">HAUS LABORATORIES</Link>
  </NavBar>
)

export default StyledNavbar
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AnimatedNav } from "../HomeAnimation/lib";

const NavBar = styled.nav`
  position: absolute;
  top: 0vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  z-index: 250;
`;
const NavLink = styled(Link)`
  color: #f16e70;
  background: transparent;
  font-size: 30px;
  align-items: flex-start;
  letter-spacing: 0.6;
  font-weight: 600;
  &:hover {
    text-shadow: 0px 0px 10px #f16e70;
    color: #fff;
    transition: 0.3s ease-in-out;
  }
`;

const Nav = ({ ...props }) => (
  <AnimatedNav {...props}>
    <NavBar
      css={`
        display: flex;
        justify-content: space-around;
        text-transform: uppercase;
      `}
    >
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/music">LISTEN</NavLink>
      <NavLink to="/tour">TOUR</NavLink>
      <NavLink to="/vegas">VEGAS</NavLink>
      <NavLink to="/signup">SIGN UP</NavLink>
      <NavLink to="/hauslabs">HAUS LABORATORIES</NavLink>
    </NavBar>
  </AnimatedNav>
);

export default Nav;

// import "styled-components/macro";
// import Link from "./link";
// import { AnimatedNav } from "./lib";

// const Nav = ({ ...props }) => {
//   return (
//     <AnimatedNav {...props}>
//       <ul
//         css={`
//           display: flex;
//           justify-content: space-around;
//           text-transform: uppercase;
//         `}
//       >
//         <Link>Home</Link>
//         <Link>About</Link>
//         <Link>Team</Link>
//       </ul>
//     </AnimatedNav>
//   );
// };

// export default Nav;

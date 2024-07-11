import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Link to="/login" style={{margin: '5rem 4rem', fontSize: "2rem"}}>Login</Link>
      <Link to="/signup"  style={{margin: '5rem 4rem', fontSize: "2rem"}}>Signup</Link>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

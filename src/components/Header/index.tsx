import { useState } from "react";
import { Link } from "react-router-dom";

type HeaderProps = {
  className?: string;
};

const Header = (props: HeaderProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <Link to="/">Home</Link>

        <div className="navSection">
          <Link to="/profile">Profile</Link>
          <Link to="/transaction">Transaction</Link>
          <Link to="/statement">Bank Statement</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </>
  );
};

export default Header;

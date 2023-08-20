import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as BrandLogo } from "../../assets/crown.svg";

const Navigation = () => {
  return (
    <>
      <nav>
        <ul className="main-nav">
          <li className="logo-container">
            <Link className={"logo"} to={"/"}>
              <BrandLogo />
            </Link>
          </li>
          <li className="nav-link push">
            <Link to={"shop"}>Shop</Link>
          </li>
          <li className="nav-link">
            <Link to={"sign-in"}>Sign in</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;

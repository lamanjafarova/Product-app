import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss"

const Header = () => {
  return <div id="header">
    <Link to={"/"}>Logo</Link>
    <nav>
        <ul>
            <li>
                <NavLink to={"/"}>Products</NavLink>
            </li>
            <li>
                <NavLink to={"/add-products"}>Add Products</NavLink>
            </li>
        </ul>
    </nav>

  </div>;
};

export default Header;

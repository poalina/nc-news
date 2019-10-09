import React from "react";
import { Link } from "@reach/router";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">Home | </Link>
      <Link to="/articles">Articles | </Link>
      <Link to="/users">Users | </Link>
      <Link to="/topics">Topics</Link>
    </nav>
  );
}

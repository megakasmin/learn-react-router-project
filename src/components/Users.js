import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function Users() {
  const name = "Mega";
  return (
    <div>
      <Header />
      <p>
        <Link to={"/users/" + name}>Ini adalah halaman User</Link>
      </p>
    </div>
  );
}

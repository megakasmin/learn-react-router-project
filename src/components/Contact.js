import React, { Fragment } from "react";
import About from "./About";
import Header from "./Guest/Header";

export default function Contact() {
  return (
    <Fragment>
      <div>
        <Header />
        <p>Ini adalah Contact</p>
      </div>
      <About />
    </Fragment>
  );
}

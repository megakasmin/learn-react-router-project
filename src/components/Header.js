import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import MemberHeader from "./Member/Header";
import GuestHeader from "./Guest/Header";

function Header() {
  return (
    <Fragment>
      {JSON.parse(
        localStorage.getItem("token") !== true ? (
          <GuestHeader />
        ) : (
          <MemberHeader />
        )
      )}
    </Fragment>
  );
}

export default withRouter(Header);

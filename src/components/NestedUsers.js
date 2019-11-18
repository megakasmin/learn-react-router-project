import React from "react";
import { withRouter } from "react-router-dom";

function NestedUsers(props) {
  const {
    match: {
      params: { name }
    }
  } = props;

  return (
    <div>
      <p>Ini users dengan name: {name}</p>
    </div>
  );
}

export default withRouter(NestedUsers);

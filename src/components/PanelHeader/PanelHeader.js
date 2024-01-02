import React from "react";
import { useNavigate } from "react-router-dom";

function PanelHeader(props) {

const navigate = useNavigate();

const logOut = () => {
  localStorage.setItem("faculty-token", "");
  navigate("/");
}
  return (
    <div
      className={
        "panel-header " +
        (props.size !== undefined ? "panel-header-" + props.size : "")
      }
    >
      <button onClick={logOut}>Log Out</button>
      {props.content}
    </div>
  );
}

export default PanelHeader;

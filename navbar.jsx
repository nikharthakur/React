import React, { Component } from "react";

const NavBar =({totalCounters})=> {
    return (
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Total Item In Bucket:-<span className="badge badge-pill badge-secondary">
            {totalCounters}
            </span>
          </a>
        </nav>
      );
};

export default NavBar;

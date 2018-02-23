import React, { Component } from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Define</h1>
        <Link to="/">home</Link>
      </header>
    </div>
  );
};

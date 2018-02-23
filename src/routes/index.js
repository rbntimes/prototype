import React, { Component } from "react";
import { Link } from "react-router-dom";
import randomProfile from "random-profile-generator";
var faker = require("faker/locale/nl");
// faker.locale = "nl";

export default props => {
  const { matches = 50, questions = 33 } = props;
  const users = new Array(10).fill(undefined).map(i => {
    const user = randomProfile.profile();
    console.log(faker.random.arrayElement(["male"]));
    user.avatar = faker.image.avatar("m");
    return user;
  });
  console.log(users);

  return (
    <div>
      <header className="App-header">
        <h1>Welcome</h1>
      </header>
      <p>
        Je bent goed bezig, je hebt al {questions} vragen beantwoord en wij
        hebben daarop een lijst van {matches} matches gevonden.
      </p>
      {users.map(user => <img src={user.avatar} />)}
      <Link to="/match">match</Link>
      <Link to="/define">define</Link>
    </div>
  );
};

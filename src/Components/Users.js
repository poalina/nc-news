import React, { Component } from "react";
import * as api from "../utils/api";

import { Link } from "@reach/router";

export default class Users extends Component {
  state = { user: {} };

  componentDidMount() {
    const { username } = this.props;
    api.getAllUsers(username).then(({ data }) => {
      console.log(data, "data===");
    });
  }

  render() {
    return (
      <div>
        <p>
          <b>
            <Link to={`/users/weegembump`}>weegembump</Link>
          </b>
        </p>{" "}
        <br />
        <p>
          <b>
            <Link to={`/users/happyamy2016`}>happyamy2016</Link>
          </b>
        </p>{" "}
        <br />
        <p>
          <b>
            <Link to={`/users/jessjelly`}>jessjelly</Link>
          </b>
        </p>{" "}
        <br />
        <p>
          <b>
            <Link to={`/users/grumpy19`}>grumpy19</Link>
          </b>
        </p>{" "}
        <br />
      </div>
    );
  }
}

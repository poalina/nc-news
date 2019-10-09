import React from "react";

import { Link } from "@reach/router";

export default function Users() {
  return (
    <div>
      <p>
        <b>
          <Link to={`/users/happyamy2016`}>happyamy2016</Link>
        </b>
      </p>{" "}
      <img
        src="https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729"
        alt="amypict"
      ></img>
      <br />
      <p>
        <b>
          <Link to={`/users/jessjelly`}>jessjelly</Link>
        </b>
      </p>{" "}
      <img
        src="https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg"
        alt="jess pict"
      ></img>
      <br />
      <p>
        <b>
          <Link to={`/users/grumpy19`}>grumpy19</Link>{" "}
        </b>
      </p>{" "}
      <img
        src="https://www.tumbit.com/profile-image/4/original/mr-grumpy.jpg"
        alt="pure"
      ></img>
      <br />
      <p>
        <b>
          <Link to={`/users/weegembump`}>weegembump</Link>
        </b>
      </p>{" "}
      <br />
    </div>
  );
}

import React from "react";
import { withAuthorization } from "../Session";

const HomePage = () => (
    <div>
        <h1>Home</h1>
        <p>The Home Page is accessibble by every signed in user.</p>
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);

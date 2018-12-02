import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const pageOne = () => {
  return (
    <div>
      PageOne
      <Link to="/pagetwo">Navigate to Page To</Link>
    </div>
  );
};

const pageTwo = () => {
  return (
    <div>
      PageTwo
      <Link to="/">Navigate to Page One</Link>
    </div>
  );
};

const app = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={pageOne} />
          <Route path="/pageTwo" component={pageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default app;

import React from "react";

const Header = () => {
  return (
    <div className="Header">
      <div className="header__skew" />
      <div className="header__border" />
      <h1 className="header__h1">Bottega Madlibs</h1>
      <p className="header__p">
        Fill out the fields below and click the generate button to see the Mad
        Lib story
      </p>
    </div>
  );
};

export default Header;

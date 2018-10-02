import React from "react";

const Header = ({logo}) => {
  return (
    <React.Fragment>
       <header className="c-global-header">
          <div className="c-wrap">
            <h1 className="c-global-header__product-title">
              <img
                src={logo}
                alt="Citizens Advice logo"
              />
            </h1>
          </div>
        </header>
    </React.Fragment>
  );
};

export default Header;
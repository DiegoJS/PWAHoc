import React from "react";

const WrappedLogin = (Component) => {
  return (props) => {
    return <Component {...props} />;
  };
};

export default WrappedLogin;

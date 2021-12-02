import React from "react";

// Style
import { ButtonControl } from "./Button.styles";

const Button = (props) => {
  return (
    <ButtonControl type={props.type} className='button' onClick={props.onClick}>
      {props.children}
    </ButtonControl>
  );
};

export default Button;

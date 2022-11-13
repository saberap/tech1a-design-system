import {
  ForwardRefRenderFunction,
  ReactNode,
  HTMLProps,
  InputHTMLAttributes,
} from "react";
import classnames from "classnames";

import "./input.scss";

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  textAlign: "right" | "left" | "center";
  backgroundColor: string;
  borderColor: string;
  textColor: string;
}

export type InputProps = BaseInputProps;

const Input: ForwardRefRenderFunction<unknown, InputProps> = (props, ref) => {
  const {
    className,
    children,
    style,
    backgroundColor,
    textAlign,
    textColor,
    ...otherProps
  } = props;

  return (
    <div>
      <input
        className={classnames("input", className)}
        {...otherProps}
        style={{ backgroundColor, textAlign, color: textColor, ...style }}
      />
    </div>
  );
};

export default Input;

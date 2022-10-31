import {
  ForwardRefRenderFunction,
  ReactNode,
  HTMLProps,
  ButtonHTMLAttributes,
} from "react";
import classnames from "classnames";

import Loading from "../loading";

import styles from "./button.module.scss";

export type ButtonType =
  | "default"
  | "danger"
  | "primary"
  | "success"
  | "custom";

export type ButtonVariant = "filed" | "outline";

export type ComponentSize = "default" | "large" | "medium" | "small";

interface BaseButtonProps extends Omit<HTMLProps<HTMLButtonElement>, "size"> {
  type?: ButtonType;
  variant?: ButtonVariant;
  icon?: string;
  size?: ComponentSize;
  children?: ReactNode;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
  loading?: boolean;
}

interface BseStyledButton {
  customStyle? : any;
}

export type ButtonProps = BaseButtonProps;

const Button: ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
  const {
    type,
    size,
    icon,
    loading,
    children,
    variant,
    style,
    textColor,
    backgroundColor,
    ...otherProps
  } = props;

  const StyledButton = (props: ButtonHTMLAttributes<HTMLButtonElement> & BseStyledButton) => {

    const { customStyle } = props;

    let outlineClass = styles.button__default__outline;
    let buttonSizeClassName = styles.default;

    if (size) buttonSizeClassName = styles[size];

    const { disabled, className } = otherProps;
    if (type === "danger") {
      outlineClass = styles.button__danger__outline;
    }
    if (type === "primary") {
      outlineClass = styles.button__primary__outline;
    }
    if (type === "success") {
      outlineClass = styles.button__success__outline;
    }

    return (
      <button
        {...props}
        {...otherProps}
        className={classnames(styles.button, props.className, [
          variant === "outline" && outlineClass,
          disabled && styles.button__disabled,
          (loading || icon) && styles.button__flex,

          buttonSizeClassName,

          className,
        ])}
        style={{...customStyle,...style}}
      >
        {icon && <img className={styles.button__icon} src={icon} alt="" />}
        {children}
        {loading && (
          <Loading
            type="spin"
            color={variant === "outline" ? "#000" : "#fff"}
            width={15}
            height={15}
            className={styles.button__loadingIcon}
          />
        )}
      </button>
    );
  };

  if (type === "danger")
    return <StyledButton className={styles.button__danger} />;

  if (type === "primary")
    return <StyledButton className={styles.button__primary} />;

  if (type === "success")
    return <StyledButton className={styles.button__success} />;

  if (type === "custom")
    return (
      <StyledButton
        className={styles.button__default}
        customStyle={{ backgroundColor, color: textColor, ...style }}
      />
    );

  return <StyledButton className={styles.button__default} />;
};

export default Button;

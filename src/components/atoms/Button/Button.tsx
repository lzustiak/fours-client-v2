import { MouseEventHandler } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: string;
  variant?: "text" | "outlined" | "contained";
  color?: "primary" | "red" | "yellow";
  disabled?: boolean;
  fullWidth?: boolean;
};

function Button(props: Props) {
  const {
    onClick,
    children,
    variant = "contained",
    color = "primary",
    disabled,
    fullWidth,
  } = props;

  const buttonProps = classNames(
    styles.button,
    styles[variant],
    styles[color],
    {
      [styles.disabled]: disabled,
      [styles.fullWidth]: fullWidth,
    },
  );

  return (
    <button className={buttonProps} onClick={onClick} disabled={disabled}>
      <span>{children}</span>
    </button>
  );
}

export default Button;

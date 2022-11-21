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
    color = "default",
    disabled,
    fullWidth,
  } = props;

  const classProps = classNames(styles.button, styles[variant], styles[color], {
    [styles.disabled]: disabled,
    [styles.fullWidth]: fullWidth,
  });

  return (
    <button className={classProps} onClick={onClick} disabled={disabled}>
      <span>{children}</span>
    </button>
  );
}

export default Button;

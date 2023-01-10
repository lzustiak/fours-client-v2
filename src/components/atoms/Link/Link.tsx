import { Link as RouterLink } from "react-router-dom";
import classNames from "classnames";
import styles from "./Link.module.scss";

type Props = {
  to: string;
  children: string;
  variant?: "text" | "outlined" | "contained";
  color?: "primary" | "red" | "yellow";
  fullWidth?: boolean;
};

function Link(props: Props) {
  const {
    to,
    children,
    variant = "contained",
    color = "primary",
    fullWidth,
  } = props;

  const linkProps = classNames(styles.link, styles[variant], styles[color], {
    [styles.fullWidth]: fullWidth,
  });

  return (
    <RouterLink to={to} className={linkProps}>
      <span>{children}</span>
    </RouterLink>
  );
}

export default Link;

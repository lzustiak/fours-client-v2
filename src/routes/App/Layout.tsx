import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";

function Layout() {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}></div>
      <Outlet />
    </div>
  );
}

export default Layout;

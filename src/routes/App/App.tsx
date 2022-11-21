import Button from "@components/atoms/Button";
import { Outlet } from "react-router-dom";
import Layout from "./Layout";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}></div>
      <Outlet />
    </div>
  );
}

export default App;

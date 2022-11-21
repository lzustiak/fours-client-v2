import Button from "@components/atoms/Button";
import styles from "./Sandbox.module.css";

function Sandbox() {
  return (
    <div>
      <div className={styles.buttonContainer}>
        <Button onClick={() => {}} variant="text">
          button
        </Button>
        <Button onClick={() => {}} variant="outlined">
          Get started
        </Button>
        <Button onClick={() => {}} variant="contained">
          button
        </Button>
      </div>
      <div className={styles.buttonContainer}>
        <Button onClick={() => {}} variant="text" color="red">
          button
        </Button>
        <Button onClick={() => {}} variant="outlined" color="red">
          Get started
        </Button>
        <Button onClick={() => {}} variant="contained" color="red">
          button
        </Button>
      </div>
      <div className={styles.buttonContainer}>
        <Button onClick={() => {}} variant="text" color="yellow">
          button
        </Button>
        <Button onClick={() => {}} variant="outlined" color="yellow">
          Get started
        </Button>
        <Button onClick={() => {}} variant="contained" color="yellow">
          button
        </Button>
      </div>
      <div className={styles.buttonContainer}>
        <Button onClick={() => {}} variant="text" color="yellow" disabled>
          button
        </Button>
        <Button onClick={() => {}} variant="outlined" color="yellow" disabled>
          Get started
        </Button>
        <Button onClick={() => {}} variant="contained" color="yellow" disabled>
          button
        </Button>
      </div>
    </div>
  );
}

export default Sandbox;

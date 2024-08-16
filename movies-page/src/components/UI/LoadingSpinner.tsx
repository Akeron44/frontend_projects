import classes from "./LoadingSpinner.module.css";

function LoadingSpinner() {
  return (
    <div className={classes.loading}>
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
}

export default LoadingSpinner;

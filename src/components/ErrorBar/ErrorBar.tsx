import styles from "./ErrorBar.module.scss";

const ErrorBar = ({ error }: { error: string }) => {
  if (!error) return <></>;
  return <div className={styles.errorBar_container}>{error}</div>;
};

export default ErrorBar;

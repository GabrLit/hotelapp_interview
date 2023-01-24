import { useContext } from "react";
import { HotelDataContext } from "../../context/HotelDataContext";
import styles from "./ErrorBar.module.scss";

const ErrorBar = () => {
  const { error } = useContext(HotelDataContext);
  if (!error) return <></>;
  return <div className={styles.errorBar_container}>{error}</div>;
};

export default ErrorBar;

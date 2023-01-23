import React from "react";
import styles from "./IncrementDecrement.module.scss";

interface IncrementDecrementProps {
  value: number;
  label?: string;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const IncrementDecrement = ({
  value = 0,
  label,
  setValue,
}: IncrementDecrementProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor="input" className={styles.label}>
        {label}
      </label>

      <button
        className={styles.button}
        onClick={() => {
          if (value > 0) setValue((prev) => prev - 1);
        }}
      >
        -
      </button>
      <input
        id="input"
        className={styles.input}
        min={0}
        maxLength={2}
        value={value}
        onChange={(e) => {
          if (e.target.value === "") setValue(0);
          setValue(Number(e.target.value.replace(/\D/g, "")));
        }}
      ></input>
      <button
        className={styles.button}
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default IncrementDecrement;

import React from "react";
import { FilterNameTypes } from "../../context/FiltersContext";
import styles from "./IncrementDecrement.module.scss";

interface IncrementDecrementProps {
  name: FilterNameTypes;
  value: number;
  label?: string;
  onIncrement: (name: FilterNameTypes) => void;
  onDecrement: (name: FilterNameTypes) => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    name: FilterNameTypes
  ) => void;
}

const IncrementDecrement = ({
  name,
  value = 0,
  label,
  onIncrement,
  onDecrement,
  onChange,
}: IncrementDecrementProps) => {
  return (
    <div className={styles.incrementDecrement_container}>
      <label htmlFor="input" className={styles.incrementDecrement_label}>
        {label}
      </label>

      <button className={styles.button} onClick={() => onDecrement(name)}>
        -
      </button>
      <input
        id="input"
        className={styles.incrementDecrement_input}
        min={0}
        maxLength={2}
        value={value}
        onChange={(e) => onChange(e, name)}
      ></input>
      <button
        className={styles.incrementDecrement_button}
        onClick={() => onIncrement(name)}
      >
        +
      </button>
    </div>
  );
};

export default IncrementDecrement;

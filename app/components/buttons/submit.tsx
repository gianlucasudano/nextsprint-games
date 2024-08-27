"use client";

import { useFormStatus } from "react-dom";
import styles from "./button.module.css";

export function Submit() {
  const { pending } = useFormStatus();

  return (
    <button className={`${styles.submit} ${styles.button}`} type="submit" aria-disabled={pending}>
      Submit
    </button>
  );
}

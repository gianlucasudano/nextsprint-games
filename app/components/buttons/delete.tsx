"use client";

import { useFormStatus } from "react-dom";
import Image from "next/image";
import styles from "./button.module.css";

interface DeleteProps {
  customClass: string;
}

export function Delete({ customClass }: DeleteProps) {
  const { pending } = useFormStatus();

  return (
    <button
      className={`${styles.buttonSVG} ${styles.button} background ${customClass}`}
      type="submit"
      aria-disabled={pending}
    >
      <Image
        src="/red-x-icon.svg"
        alt="Delete Icon"
        width={32}
        height={32}
      />
    </button>
  );
}

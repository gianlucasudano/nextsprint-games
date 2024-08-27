"use client"

import { useFormStatus } from "react-dom";
import Image from "next/image";
import styles from "./button.module.css";

export function Delete() {
    const { pending } = useFormStatus();
  
    return (
      <button className={`${styles.buttonSVG} ${styles.button}`} type="submit" aria-disabled={pending}>
         <Image
              src="/red-x-icon.svg"
              alt="Delete Icon"
              width={32}
              height={32}
              priority
            />
      </button>
    );
  }
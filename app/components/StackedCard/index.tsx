"use client"

import styles from "./styles.module.css";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function StackedCard({...restProps }: CardProps) {
  return <div className={styles.filled} {...restProps} />;
}

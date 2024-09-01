import styles from "./styles.module.css";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function StackedContainer({ ...restProps }: ContainerProps) {
  return <div className={styles.filled} {...restProps} />;
}

import styles from "./styles.module.css";

import { Delete } from "@/app/components/buttons/delete";
import { StackedCard } from "../StackedCard";

interface GameProps {
  name: string;
  category: string;
}

export function Game({ name='pippo', category='arcade' }: GameProps) {
  return (
    <div className={styles.wrapper}>
      <Delete customClass={styles.delete} />
      <StackedCard />
      <div className={styles.metaInfo}>
        <span className="label-small">{name}</span>
        <span className="label-small">{category}</span>
      </div>
    </div>
  );
}

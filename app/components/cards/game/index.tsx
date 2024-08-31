import styles from "./styles.module.css";
import Image from "next/image";

import { Delete } from "@/app/components/buttons/delete";
import { StackedCard } from "../StackedCard";

interface GameProps {
  category: string;
  imageSrc: string;
  name: string;
}

export function Game({
  category = "category",
  imageSrc = "https://loremflickr.com/640/480/sports",
  name = "game name",
}: GameProps) {
  return (
    <div className={styles.wrapper}>
      <Delete customClass={styles.delete} />
      <StackedCard>
        <Image
          alt={`game thumbnail ${name}`}
          height={0}
          sizes="(max-width: 768px) 100vw, 33vw"
          src={imageSrc}
          style={{ width: "100%", height: "auto" }}
          width={0}
        />
      </StackedCard>
      <div className={styles.metaInfo}>
        <span className="label-small">{name}</span>
        <span className="label-small">{category}</span>
      </div>
    </div>
  );
}

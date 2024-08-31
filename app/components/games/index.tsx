"use server";

import styles from "./styles.module.css";
import { DeleteForm } from "@/app/components/delete-form";

interface GameCardProps {
  category: string;
  thumbnail: string;
  name: string;
  id: string;
}

interface GamesProps {
  games: GameCardProps[];
}

export async function Games({ games }: GamesProps) {
  return (
    <div className={styles.wrapper}>
      {games.map(({ category, name, thumbnail, id }) => (
        <DeleteForm
          key={id}
          category={category}
          name={name}
          imageSrc={thumbnail}
          id={id}
        />
      ))}
    </div>
  );
}

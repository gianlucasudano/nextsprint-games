import styles from "@/app/page.module.css";

import { Delete } from "@/app/components/buttons/delete";
import { Submit } from "@/app/components/buttons/submit";
import { AddGameLink } from "@/app/components/buttons/add-game-link";


export default function Games() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Games</p>
        <Delete />
        <Submit />
        <AddGameLink />
      </div>
    </main>
  );
}

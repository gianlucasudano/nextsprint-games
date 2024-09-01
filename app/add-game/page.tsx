import styles from "@/app/page.module.css";

import { AddGameForm } from "@/app/components/add-game-form";

export default function AddGame() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <AddGameForm />
      </div>
    </main>
  );
}

import { getGames } from "@/app/api/getGames";

import styles from "@/app/page.module.css";

import { Games } from "@/app/components/games";

export async function GamesList() {
  const games = await getGames();

  return (
    <main className={`${styles.main} background`}>
      <div className={styles.content}>
        {Array.isArray(games) && <Games games={games} />}
        {games?.message && <p>{games?.message}</p>}
      </div>
    </main>
  );
}

export default GamesList;

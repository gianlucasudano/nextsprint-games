import { getGames } from "@/app/api/getGames";

import styles from "@/app/page.module.css";

import { Games } from "@/app/components/games";

export async function GamesList() {
  const games = await getGames();

  return (
    <main className={`${styles.main} background`}>
      <Games games={games} />
    </main>
  );
}

export default GamesList;

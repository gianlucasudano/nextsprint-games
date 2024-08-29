import styles from "@/app/page.module.css";

import { Delete } from "@/app/components/buttons/delete";
import { Submit } from "@/app/components/buttons/submit";
import { Game } from "@/app/components/cards/game";
import { Logo } from "@/app/components/nav/logo";

export default function Games() {
  return (
    <main className={`${styles.main} background`}>
      <p>Games</p>
      <Logo />
      <Delete />
      <Submit />
      <Game />
    </main>
  );
}

import styles from "./nav.module.css";
import { Logo } from "./logo";
import { AddGameLink } from "./add-game-link";

export function Nav() {
  return (
    <div className={`${styles.nav} background`}>
      <Logo />
      <AddGameLink />
    </div>
  );
}

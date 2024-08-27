import Link from "next/link";
import styles from "./button.module.css";
import Image from "next/image";

export function AddGameLink() {
  return (
    <Link className={styles.addGameLink} href="/games/add-game">
      <Image
        src="/plus-icon.svg"
        alt="Plus Icon"
        width={16}
        height={16}
        priority
      />
      Game
    </Link>
  );
}

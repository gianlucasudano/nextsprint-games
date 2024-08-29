import Link from "next/link";
import styles from "./add-game-link.module.css";
import Image from "next/image";

export function AddGameLink() {
  return (
    <Link className={`${styles.addGameLink} primary on-primary-text`} href="/add-game">
      <Image
        src="/plus-icon.svg"
        alt="Plus Icon"
        width={16}
        height={16}
        priority
      />
      <span className="label-medium">Game</span>
    </Link>
  );
}

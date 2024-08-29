import styles from "@/app/page.module.css";

import { Delete } from "@/app/components/buttons/delete";
import { Submit } from "@/app/components/buttons/submit";
import { StackedCard } from "@/app/components/StackedCard";
import { Logo } from "@/app/components/nav/logo";

export default function Games() {
  return (
    <main className={`${styles.main} background`}>
      <p>Games</p>
      <Logo />
      <Delete />
      <Submit />
      <StackedCard>Pippo</StackedCard>
    </main>
  );
}

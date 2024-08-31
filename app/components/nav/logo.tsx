import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/">
      <Image
        src="/next-games-logo.svg"
        alt="Logo"
        height={24}
        width={193}
      />
    </Link>
  );
}

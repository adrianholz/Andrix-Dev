"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
  name: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function TransitionLink({
  children,
  href,
  name,
}: TransitionLinkProps) {
  const router = useRouter();

  const handleTransition = async (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();

    const transition = document.querySelector<HTMLDivElement>("#transition");
    const transitionText =
      document.querySelector<HTMLParagraphElement>("#transition p");
    transitionText!.innerText = name;

    transition?.classList.add("active");
    await sleep(300);
    router.push(href);
    await sleep(700);
    transition?.classList.remove("active");
  };

  return (
    <Link onClick={handleTransition} href={href}>
      {children}
    </Link>
  );
}

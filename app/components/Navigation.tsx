"use client"
import { isActiveLink } from "@/lib/utils";
import { LayoutGroup, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links: { name: string; href: string }[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Portfolio',
    href: '/portfolio',
  },
]

const Navigation = () => {
  const pathname = usePathname()

  return (
    <LayoutGroup>
      <nav className="flex">
        <>
          {links.map((link) => {
            const isActive = pathname === link.href

            return (
              <Link
                className="mr-6 sm:mr-8 flex flex-col relative"
                href={link.href}
                key={link.name}
                scroll={false}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    animate
                    className="navigation-underline"
                    layoutId="navigation-underline"
                  />
                )}
              </Link>
            )
          })}
        </>
        {/* {links.map(({ name, href }) => (
          // (<Link
          //   key={name}
          //   href={href}
          //   scroll={false}
          //   className="mr-6 sm:mr-8 flex flex-col relative"
          // >
          //   {name}
          //   {isActiveLink(href, pathname) && (
          //     <motion.div
          //       layoutId="navigation-underline"
          //       className="navigation-underline"
          //       animate
          //     />
          //   )}

          // </Link>)
        ))} */}
      </nav>
    </LayoutGroup>
  );
}

export default Navigation

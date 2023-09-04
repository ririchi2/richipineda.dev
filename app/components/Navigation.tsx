import { AnimateSharedLayout, motion } from "framer-motion";
import Link from "next/link";

const links: { name: string; href: string }[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Portfolio',
    href: '/portfolio',
  },
]

const Navigation = (): JSX.Element => {
  const router = useRouter()

  return (
    <AnimateSharedLayout>
      <nav className="flex">
        {links.map(({ name, href }) => (
          <Link key={name} href={href}>
            <a className="mr-6 sm:mr-8 flex flex-col relative">
              {name}
              {isActiveLink(href, router.pathname) && (
                <motion.div
                  layoutId="navigation-underline"
                  className="navigation-underline"
                  animate
                />
              )}
            </a>
          </Link>
        ))}
      </nav>
    </AnimateSharedLayout>
  )
}

export default Navigation

"use client"
import React, { ReactNode } from "react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

interface IProps {
  children: React.ReactNode
}

const variants = {
  hidden: { opacity: 0, x: -300, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

const Layout = ({ children }: IProps) => {
  const pathname = usePathname()
  return (
    <div>
        <motion.main
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: 'linear' }}
          className="
              flex flex-col items-start w-full
              px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
              pt-24 h-full
          "
          key={pathname}
        >
          {children}
        </motion.main>
    </div>
  )
}

export default Layout

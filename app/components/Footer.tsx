import SocialIcons from './SocialIcons'

const Footer = () => (
    <footer className="w-full flex flex-col items-center">
        <SocialIcons />
        <a
            className="text-sm mb-4 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
            href="mailto:richipineda2@gmail.com?Subject=Hello (richipineda.dev)"
        >
            richipineda2@gmail.com
        </a>
        {/* <Link scroll={false} href="/">
            <a className="text-sm mb-8 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
                lorem ipsum
            </a>
        </Link> */}
    </footer>
)

export default Footer

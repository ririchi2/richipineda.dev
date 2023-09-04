import Image from 'next/image'
import PageTitle from './components/PageTitle'
import Layout from './components/Layout'
import Section from './components/Section'


const title = "Hello, I'm Ricardo"
const subtitle = "I'm a web developer living in Santa Cruz de Tenerife, Spain"


export default function Home() {
  return (
    <Layout>
      <PageTitle title={title} subtitle={subtitle} />

      <Section linebreak>
        <h2 className="text-3xl md:text-4xl mb-4 text-black dark:text-white">About</h2>
        <p className="my-2">
          I spend most of my time as a frontend developer, but I also have experience with backend.
          Sometimes I use Node.js, Docker and Java and
          I&apos;m currently trying some wizardry in TypeScript 🪄.
        </p>
        <p className="my-2">
          Outside of work I spend my time learning new techs as the industry never stops evolving,
          I also go to the gym, enjoy some nighttime gaming and like to spend time outdoors.
        </p>
      </Section>
    </Layout>
  )
}

import Image from 'next/image'
import PageTitle from './components/PageTitle'
import Layout from './components/Layout'


const title = "Hello, I'm Ricardo"
const subtitle = "I'm a web developer living in Santa Cruz de Tenerife, Spain"


export default function Home() {
  return (
    <Layout>
      <PageTitle title={title} subtitle={subtitle} />
    </Layout>
  )
}

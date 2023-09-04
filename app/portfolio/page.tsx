import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";

const title = 'Projects 📚'
const subtitle = "A selection of projects I've worked on, during my time as a developer."


export default function Portfolio() {

  return (
    <Layout>
      <PageTitle title={title} subtitle={subtitle} />
    </Layout>
  )
}

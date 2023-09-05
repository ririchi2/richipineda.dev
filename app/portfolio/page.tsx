import ArticleCard from "../components/ArticleCard";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import Section from "../components/Section";

const title = 'Projects 📚'
const subtitle = "A selection of projects I've worked on, during my time as a developer."


export default function Portfolio() {

  return (
    <Layout>
      <PageTitle title={title} subtitle={subtitle} />
      <Section linebreak >
        <ArticleCard title={""} description={""} portfolio={true} url={""} />
      </Section>
    </Layout>
  )
}

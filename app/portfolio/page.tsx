import ArticleCard from "../components/ArticleCard";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import Section from "../components/Section";
import { projects } from "../data/projects";

const title = 'Projects 📚'
const subtitle = "A selection of projects I've worked on, during my time as a developer."


export default function Portfolio() {

  return (
    <Layout>
      <PageTitle title={title} subtitle={subtitle} />
      <Section linebreak >
        {projects.map((project, i) => (
          <ArticleCard
            key={i}
            title={project.title}
            description={project.description}
            portfolio={true}
            href={project.href}
            tags={project.tags}
          />
        ))}
      </Section>
    </Layout>
  )
}

import { GetStaticProps } from "next"
import { InferGetStaticPropsType } from 'next'

import ProjectsHeader from "@/components/ProjectsHeader"
import ProjectsGrid from "@/components/ProjectsGrid"

const FrontEnd: React.FC = ({ Projects }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <ProjectsHeader Title="Front-End" />

      <ProjectsGrid Projects={Projects} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://mywebexperience.vercel.app/api/Projects/categories/Front-End")
  const data = await res.json()

  return {
    props: {
      Projects: data.Projects
    },
    revalidate: 120
  }
}

export default FrontEnd
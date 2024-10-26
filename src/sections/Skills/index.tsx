import { AnimatedList } from "@/components/UI/AnimatedList";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { SkillCard } from "@/components/UI/SkillCard";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const skills = [
  { name: "HTML", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.", icon: <ArrowUpIcon /> },
  { name: "HTML", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.", icon: <ArrowUpIcon /> },
  { name: "HTML", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.", icon: <ArrowUpIcon /> },
  { name: "HTML", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.", icon: <ArrowUpIcon /> },
  { name: "HTML", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.", icon: <ArrowUpIcon /> },
]

export function SkillsSection() {
  return (
    <section id="skills" className="section-container">
      <SectionTitle text="Habilidades" />

      <div className="flex flex-col items-center gap-20" >
        <AnimatedList
          items={skills.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              description={skill.description}
              icon={skill.icon}
            />
          ))}
          className="flex flex-wrap gap-x-4 gap-y-8"
          withListStyle={false}
          withDelay={false}
          animationOrientation="vertical"
        />

        <Link href="/skills" className="text-emerald-400 underline underline-offset-4 transition-opacity hover:opacity-70" >
          Veja mais
        </Link>
      </div>
    </section>
  )
}
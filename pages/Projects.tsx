import { Divider, Grid, Header } from "semantic-ui-react";
import Project from "../components/Project";

const projects = [
  {
    title: "Ruzzle Solver",
    image: "ruzzle-solver.png",
    excerpt:
      "Designed a program to play Ruzzle, a mobile word finding game in a 4x4 grid. Utilized optical character recognition, custom trained models, graph theory, and Android automation.",
  },
];

export default function Projects() {
  return (
    <div style={{ padding: "2%" }}>
      <Header size="large" style={{ textAlign: "center" }}>
        Projects
      </Header>
      <Divider />
      {projects.map((project, index) => (
        <Project
          title={project.title}
          image={project.image}
          excerpt={project.excerpt}
          imgSide={index % 2}
        />
      ))}
    </div>
  );
}

import { Divider, Grid, Header } from "semantic-ui-react";
import Project from "../components/Project";

export default function Projects() {
  return (
    <div style={{ padding: "2%" }}>
      <Header size="large" style={{ textAlign: "center" }}>
        Projects
      </Header>
      <Divider />
      <Grid centered verticalAlign="middle" columns={2}>
        <Project
          title="Ruzzle Solver"
          image="ruzzle-solver.png"
          excerpt={
            <>
              Designed a program to play Ruzzle, a mobile word finding game in a
              4x4 grid. Utilized optical character recognition, custom trained
              models, graph theory, and Android automation.
            </>
          }
        />
      </Grid>
    </div>
  );
}

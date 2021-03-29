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
        <Project />
      </Grid>
    </div>
  );
}

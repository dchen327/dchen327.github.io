import Image from "next/image";
import { Container, Divider, Grid, Header } from "semantic-ui-react";

export default function About() {
  return (
    <Container style={{ padding: "5%" }}>
      <Header size="large" style={{ textAlign: "center" }}>
        About Me
      </Header>
      <Divider />
      <Grid>
        <Grid.Row centered verticalAlign="middle">
          <Grid.Column width={4}>
            <Image src="/images/david.jpg" layout="fill" />
          </Grid.Column>
          <Grid.Column width={12}>
            <p>Hi!</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

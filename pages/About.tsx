import { Container, Divider, Grid, Header, Image } from "semantic-ui-react";

export default function About() {
  return (
    <Container style={{ padding: "2%" }}>
      <Header size="large" style={{ textAlign: "center" }}>
        About Me
      </Header>
      <Divider />
      <Grid
        centered
        columns="equal"
        verticalAlign="middle"
        style={{ padding: "0% 10% 0% 10%" }}
      >
        <Grid.Row>
          <Grid.Column width={4}>
            <Image src="/images/david.jpg" verticalAlign="middle" />
          </Grid.Column>
          <Grid.Column width={12}>
            <p>Hi!</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

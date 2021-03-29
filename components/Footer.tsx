import { Button, Grid, Icon } from "semantic-ui-react";

export default function Footer() {
  return (
    <Grid centered columns="equal" style={{ background: "#2C2F33" }}>
      <Grid.Row>
        <Grid.Column verticalAlign="middle" textAlign="right">
          <Button
            as="a"
            href="https://www.linkedin.com/in/dchen327/"
            target="_blank"
            color="linkedin"
          >
            <Icon name="linkedin" /> Linkedin
          </Button>
        </Grid.Column>
        <Grid.Column verticalAlign="middle" textAlign="center">
          <Button
            as="a"
            href="https://github.com/dchen327"
            target="_blank"
            style={{ color: "#602693" }}
          >
            <Icon name="github" /> Github
          </Button>
        </Grid.Column>
        <Grid.Column verticalAlign="middle" textAlign="left">
          <Button
            as="a"
            href="mailto:davidc3287@gmail.com"
            target="_blank"
            color="google plus"
          >
            <Icon name="mail" /> Gmail
          </Button>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <p style={{ marginTop: "-15px", color: "#ffffff" }}>
          © 2021 David Chen. Built with Next.JS and Semantic UI React
        </p>
      </Grid.Row>
    </Grid>
  );
}

import Link from "next/link";
import { Container, Divider, Grid, Header, Image } from "semantic-ui-react";

export default function About() {
  return (
    <div style={{ padding: "2%", background: "#DCDCDC" }}>
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
          <Grid.Column width={12} style={{ fontSize: "20px" }}>
            <p>
              Hi! I'm a Computer Science and Math lover, and am very interested
              in AI/ML.
            </p>
            <p>
              I like writing fun programs in Python - feel free to check out
              some of my projects below!
            </p>
            <p>
              Or glance through some of the{" "}
              <Link
                href="https://www.notion.so/Reading-List-29598ddba9b840ada60aaaf47e964c15"
                passHref
              >
                books
              </Link>{" "}
              I've read beginning in high school.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

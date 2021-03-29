import Link from "next/link";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
} from "semantic-ui-react";

export default function About() {
  return (
    <div style={{ padding: "2%", background: "#DCDCDC" }}>
      <Header size="large" style={{ textAlign: "center" }}>
        About Me
      </Header>
      <Divider />
      <Grid
        centered
        columns={2}
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
              I like writing fun programs in Python—feel free to check out some
              of my projects below!
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
            <p>
              I'm currently a senior, studying at Princeton High School in New
              Jersey.
            </p>
            <Grid centered>
              <Grid.Row>
                <Grid.Column verticalAlign="middle">
                  <Button
                    icon
                    as="a"
                    href="https://www.linkedin.com/in/dchen327/"
                    target="_blank"
                    color="linkedin"
                  >
                    <Icon name="linkedin" />
                  </Button>
                </Grid.Column>
                <Grid.Column verticalAlign="middle">
                  <Button
                    icon
                    as="a"
                    href="https://github.com/dchen327"
                    target="_blank"
                    color="black"
                  >
                    <Icon name="github" />
                  </Button>
                </Grid.Column>
                <Grid.Column verticalAlign="middle">
                  <Button
                    icon
                    as="a"
                    href="mailto:davidc3287@gmail.com"
                    target="_blank"
                    color="google plus"
                  >
                    <Icon name="mail" />
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

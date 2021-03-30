import { Button, Grid, Header, Image, Segment } from "semantic-ui-react";

export default function Project(props) {
  console.log(props);
  // alternating card projects view
  const [left, right] = props.imgSide
    ? [<ProjectDesc {...props} />, <ProjectImage {...props} />]
    : [<ProjectImage {...props} />, <ProjectDesc {...props} />];
  return (
    <Grid centered verticalAlign="middle">
      <Grid.Row>
        <Grid.Column width={props.imgSide ? 10 : 5}>{left}</Grid.Column>
        <Grid.Column width={props.imgSide ? 5 : 10}>{right}</Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

function ProjectImage(props) {
  return <Image src={`/images/${props.image}`} verticalAlign="middle" />;
}

function ProjectDesc(props) {
  return (
    <Segment centered>
      <Header size="huge">
        {props.title}
        <Header.Subheader style={{ paddingTop: "10px", fontSize: "18px" }}>
          {props.excerpt}
        </Header.Subheader>
        <Button
          positive
          style={{ marginTop: "15px" }}
          as="a"
          href={props.sourceURL}
          target="_blank"
        >
          Source Code
        </Button>
      </Header>
    </Segment>
  );
}

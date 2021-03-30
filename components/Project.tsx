import { Grid, Header, Image } from "semantic-ui-react";

export default function Project(props) {
  // alternating card projects view
  const [left, right] =
    props.imgSide === 0
      ? [<ProjectImage {...props} />, <ProjectDesc {...props} />]
      : [<ProjectDesc {...props} />, <ProjectImage {...props} />];
  return (
    <Grid centered verticalAlign="middle" columns="equal">
      <Grid.Row>
        <Grid.Column>{left}</Grid.Column>
        <Grid.Column>{right}</Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

function ProjectImage(props) {
  return <Image src={`/images/${props.image}`} verticalAlign="middle" />;
}

function ProjectDesc(props) {
  return (
    <>
      <Header size="huge">
        {props.title}
        <Header.Subheader>{props.excerpt}</Header.Subheader>
      </Header>
    </>
  );
}

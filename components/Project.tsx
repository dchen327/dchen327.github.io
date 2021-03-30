import { Grid } from "semantic-ui-react";

export default function Project(props) {
  return (
    <>
      <Grid.Row>
        <Grid.Column>{props.image}</Grid.Column>
        <Grid.Column>{props.title}</Grid.Column>
      </Grid.Row>
    </>
  );
}

import { Divider, Grid, Header, List } from "semantic-ui-react";

export default function Resources() {
  return (
    <div style={{ padding: "2%", background: "#e8f4f8" }}>
      <Header id="Resources" size="huge" style={{ textAlign: "center" }}>
        Skills and Technologies
      </Header>
      <Divider />
      <Grid centered style={{ textAlign: "left", padding: "2% 0% 5% 0%" }}>
        <List size="huge" bulleted>
          <List.Item>OS: Windows 10 + WSL2, Pop! OS</List.Item>
          <List.Item>
            Programming Languages: Python, Java, C++, HTML/CSS/JS, Latex
          </List.Item>
          <List.Item>Code Editors: VSCode, Sublime Text, repl.it</List.Item>
        </List>
      </Grid>
    </div>
  );
}

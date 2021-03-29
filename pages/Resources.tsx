import { Container, Header, List } from "semantic-ui-react";

export default function Projects() {
  return (
    <Container>
      <Header>Software and Tools</Header>
      <List bulleted>
        <List.Item>OS: Windows 10 + WSL2, Pop! OS</List.Item>
        <List.Item>
          Programming Languages: Python, Java, C++, HTML/CSS/JS, Latex
        </List.Item>
        <List.Item>Code Editors: VSCode, Sublime Text, repl.it</List.Item>
      </List>
    </Container>
  );
}

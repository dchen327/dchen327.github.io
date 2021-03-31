import Image from "next/image";
import { Link } from "react-scroll";
import { Menu } from "semantic-ui-react";

export default function Navbar() {
  return (
    <Menu
      borderless
      inverted
      fixed="top"
      size="massive"
      style={{
        background: "#2C2F33",
      }}
    >
      <Link href="/" passHref>
        <Menu.Item name="Home" position="right" />
      </Link>

      <Link href="/#About" passHref>
        <Menu.Item name="About" />
      </Link>

      <Link to="About" smooth={true} offset={-70} duration={500}>
        <Menu.Item name="About" />
      </Link>

      <Link href="/#Projects" passHref>
        <Menu.Item name="Projects" />
      </Link>

      <Menu.Item
        name="Books"
        href="https://www.notion.so/Reading-List-29598ddba9b840ada60aaaf47e964c15"
        target="_blank"
      />
      <Link href="/resources" passHref>
        <Menu.Item name="Resources" />
      </Link>
      <Link href="/resume.pdf" passHref>
        <Menu.Item name="Resume" />
      </Link>
    </Menu>
  );
}

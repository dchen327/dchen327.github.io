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
      {/* <Link to="/" smooth={true} offset={-70} duration={500}>
        <Menu.Item name="Home" position="right" />
      </Link> */}

      <Menu.Item as={Link} name="Home" position="right">
        <Link to="/" smooth={true} offset={-70} duration={500}>
          Home
        </Link>
      </Menu.Item>

      <Menu.Item as={Link} name="About">
        <Link to="About" smooth={true} offset={-70} duration={500}>
          About
        </Link>
      </Menu.Item>

      <Menu.Item as={Link} name="Projects">
        <Link to="Projects" smooth={true} offset={-70} duration={500}>
          Projects
        </Link>
      </Menu.Item>

      <Menu.Item
        name="Books"
        href="https://www.notion.so/Reading-List-29598ddba9b840ada60aaaf47e964c15"
        target="_blank"
      />

      {/* <Link href="/resume.pdf" passHref>
        <Menu.Item name="Resume" />
      </Link> */}
      <Menu.Item name="Resume" href="/resume.pdf" target="_blank" />
    </Menu>
  );
}

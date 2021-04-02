import { Link, animateScroll } from "react-scroll";
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
      <Menu.Item
        onClick={() => animateScroll.scrollToTop({ duration: 500 })}
        name="Home"
        position="right"
      />

      <Menu.Item link name="About">
        <Link to="About" smooth={true} offset={-70} duration={500}>
          About
        </Link>
      </Menu.Item>

      <Menu.Item link name="Projects">
        <Link to="Projects" smooth={true} offset={-70} duration={500}>
          Projects
        </Link>
      </Menu.Item>

      <Menu.Item link name="Resources">
        <Link to="Resources" smooth={true} offset={-70} duration={500}>
          Skills
        </Link>
      </Menu.Item>

      <Menu.Item
        name="Books"
        // as="a"
        href="https://www.notion.so/Reading-List-29598ddba9b840ada60aaaf47e964c15"
        target="_blank"
      />

      <Menu.Item name="Resume" href="/resume.pdf" target="_blank" />
    </Menu>
  );
}

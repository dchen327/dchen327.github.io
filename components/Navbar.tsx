import Image from "next/image";
import Link from "next/link";
import { Menu } from "semantic-ui-react";

export default function Navbar() {
  return (
    <Menu
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

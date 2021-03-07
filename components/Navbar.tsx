import Link from "next/link";
import { Menu } from "semantic-ui-react";

export default function Navbar() {
  return (
    <Menu inverted size="massive" fluid>
      <Link href="/" passHref>
        <Menu.Item name="Home" />
      </Link>
      <Link
        href="https://www.notion.so/Reading-List-29598ddba9b840ada60aaaf47e964c15"
        passHref
      >
        <Menu.Item name="Books" />
      </Link>
      <Link href="/resources" passHref>
        <Menu.Item name="Resources" />
      </Link>
      <Link href="/resume.pdf" passHref>
        <Menu.Item name="Resume" />
      </Link>
    </Menu>
  );
}

import { createMedia } from "@artsy/fresnel";
import { useState } from "react";
import { Link, animateScroll } from "react-scroll";
import {
  Button,
  Container,
  Header,
  Icon,
  Menu,
  Sidebar,
} from "semantic-ui-react";

const AppMedia = createMedia({
  breakpoints: {
    mobile: 320,
    tablet: 768,
    computer: 992,
    largeScreen: 1200,
    widescreen: 1920,
  },
});

const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

const menuItems = [
  <Menu.Item
    onClick={() => animateScroll.scrollToTop({ duration: 500 })}
    // name="Home"
    position="right"
    key="Home"
  />,

  <Menu.Item link key="About">
    <Link to="About" smooth={true} offset={-70} duration={500}>
      About
    </Link>
  </Menu.Item>,

  <Menu.Item link key="Projects">
    <Link to="Projects" smooth={true} offset={-70} duration={500}>
      Projects
    </Link>
  </Menu.Item>,

  <Menu.Item link key="Resources">
    <Link to="Resources" smooth={true} offset={-70} duration={500}>
      Skills
    </Link>
  </Menu.Item>,

  <Menu.Item
    name="Books"
    key="Books"
    // as="a"
    href="https://www.notion.so/Reading-List-29598ddba9b840ada60aaaf47e964c15"
    target="_blank"
  />,

  <Menu.Item name="Resume" key="Resume" href="/resume.pdf" target="_blank" />,
];

function NavbarMobile(props) {
  const { children, menuItems, onPusherClick, onToggle, visible } = props;

  return (
    <>
      <Menu fixed="top" inverted>
        <Menu.Item onClick={onToggle}>
          <Icon name="sidebar" />
        </Menu.Item>
      </Menu>
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          items={menuItems}
          vertical
          visible={visible}
          style={{
            background: "#2C2F33",
          }}
        />
        <Sidebar.Pusher
          dimmed={visible}
          onClick={onPusherClick}
          style={{ minHeight: "100vh" }}
        >
          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
}

function NavbarDesktop(props) {
  const { children } = props;

  return (
    <Menu
      borderless
      items={menuItems}
      inverted
      fixed="top"
      size="massive"
      style={{
        background: "#2C2F33",
      }}
    >
      {children}
    </Menu>
  );
}

const NavBarChildren = (props: any) => (
  // <Container style={{ margin: 0, marginTop: "5em" }}>
  //   {props.children}
  // </Container>
  props.children
);

export default function Navbar(props: any) {
  const { children } = props;
  const [visible, setVisible] = useState(false);

  const handlePusher = () => {
    if (visible) setVisible(false);
  };

  const handleToggle = () => {
    setVisible(!visible);
  };

  return (
    <MediaContextProvider>
      <Media at="mobile">
        <NavbarMobile
          menuItems={menuItems}
          onPusherClick={handlePusher}
          onToggle={handleToggle}
          visible={visible}
          children={<NavBarChildren children={children} />}
        />
      </Media>
      <Media greaterThan="mobile">
        <NavbarDesktop menuItems={menuItems} />
        <NavBarChildren children={children} />
      </Media>
    </MediaContextProvider>
  );
}

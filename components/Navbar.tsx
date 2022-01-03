import { createMedia } from "@artsy/fresnel";
import { useState } from "react";
import { Link, animateScroll, scroller } from "react-scroll";
import { Icon, Menu, Sidebar } from "semantic-ui-react";

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

const scrollConfig = {
  duration: 500,
  smooth: true,
  offset: -65,
};

const menuItems = [
  <Menu.Item
    onClick={() => animateScroll.scrollToTop({ duration: 500 })}
    position="right"
    name="Home"
    key="Home"
  />,

  <Menu.Item
    name="About"
    key="About"
    onClick={() => scroller.scrollTo("About", scrollConfig)}
  />,

  <Menu.Item
    name="Projects"
    key="Projects"
    onClick={() => scroller.scrollTo("Projects", scrollConfig)}
  />,

  <Menu.Item
    name="Skills"
    key="Skills"
    onClick={() => scroller.scrollTo("Resources", scrollConfig)}
  />,

  <Menu.Item
    name="Books"
    key="Books"
    href="https://www.notion.so/Reading-List-29598ddba9b840ada60aaaf47e964c15"
    target="_blank"
  />,

  <Menu.Item
    link
    name="Resume"
    key="Resume"
    href="/resume.pdf"
    target="_blank"
  />,
];

function NavbarMobile(props) {
  const { children, menuItems, onPusherClick, onToggle, visible } = props;

  return (
    <>
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
        <Menu fixed="top" inverted>
          <Menu.Item onClick={onToggle}>
            <Icon name="sidebar" />
          </Menu.Item>
        </Menu>
      </Sidebar.Pushable>
    </>
  );
}

function NavbarDesktop(props) {
  const { children } = props;

  return (
    <>
      <Menu
        borderless
        items={menuItems}
        inverted
        fixed="top"
        size="massive"
        style={{
          background: "#2C2F33",
        }}
      ></Menu>
      {children}
    </>
  );
}

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
          children={children}
        />
      </Media>
      <Media greaterThan="mobile">
        <NavbarDesktop menuItems={menuItems} children={children} />
      </Media>
    </MediaContextProvider>
  );
}

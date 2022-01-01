import { createMedia } from "@artsy/fresnel";
import { useState } from "react";
import { Link, animateScroll } from "react-scroll";
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

function NavbarMobile(props) {
  const { menuItems, onPusherClick, onToggle, visible } = props;

  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        items={menuItems}
        vertical
        visible={visible}
      />
      <Sidebar.Pusher
        dimmed={visible}
        onClick={onPusherClick}
        style={{ minHeight: "100vh" }}
      >
        <Menu fixed="top" inverted>
          <Menu.Item onClick={onToggle}>
            <Icon name="sidebar" />
          </Menu.Item>
          <Menu.Menu position="right">
            {menuItems.map((item) => (
              <Menu.Item {...item} />
            ))}
          </Menu.Menu>
        </Menu>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
}

function NavbarDesktop(props) {
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

export default function Navbar(props) {
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
          onPusherClick={this.handlePusher}
          onToggle={this.handleToggle}
          visible={visible}
        />
      </Media>
      <Media greaterThan="mobile">
        <NavbarDesktop menuItems={menuItems} />
      </Media>
    </MediaContextProvider>
  );
}

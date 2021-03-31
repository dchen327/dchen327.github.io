import { Header } from "semantic-ui-react";

export default function SplashScreen() {
  return (
    <div
      style={{
        backgroundImage: `url(/images/background.jpg)`,
        height: "105vh",
        backgroundSize: "cover",
      }}
    >
      <Header
        size="large"
        inverted
        style={{ fontSize: "65px", paddingTop: "10vh", paddingLeft: "3vw" }}
      >
        David Chen
        <Header.Subheader style={{ fontSize: "30px", paddingLeft: "5px" }}>
          Software Engineer
        </Header.Subheader>
      </Header>
    </div>
  );
}

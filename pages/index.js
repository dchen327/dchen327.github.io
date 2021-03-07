import Head from "next/head";
import { Button, Container } from "semantic-ui-react";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button>Hi</Button>
    </Container>
  );
}

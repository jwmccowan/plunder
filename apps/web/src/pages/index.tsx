import {
  Button,
  Container,
  Heading,
  Image,
  Input,
  Text,
  useColorMode
} from "@chakra-ui/react";
import { Layout } from "components/Layout";
import { Card } from "components/Card";
import Head from "next/head";

export default function Home() {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Button onClick={toggleColorMode}>Test Me</Button>
        <Heading as="h2" size="xl" mb={4}>
          Todo:
        </Heading>
        <Card my={6}>
          <Input placeholder="Add a new todo item" />
        </Card>
        <Card>
          <Image
            src="https://thispersondoesnotexist.com/image"
            h={120}
            w={120}
            borderRadius="full"
          />
          <Heading as="h3" size="xl" my={8}>
            Welcome, Jordan :)
          </Heading>
          <Text>We see you haven't done a thing that we want you to do.</Text>
          <Text>Could you please do that at your earliest convenience?</Text>
        </Card>
      </Layout>
    </>
  );
}

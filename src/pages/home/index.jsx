import { Container,} from "@chakra-ui/react";
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";


const Home = () => {
  return (
    <Container
      as="main"
      bgColor="base"
      maxW="1220px"
      minH="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Navbar />
      <Hero />
      <Footer />
    </Container>
  );
};

export default Home;

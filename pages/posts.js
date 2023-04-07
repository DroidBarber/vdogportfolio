import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";

import thumbtwtr from '../public/images/works/btrtwtrrr.png'


const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Better Tw*tter"
            thumbnail={thumbtwtr}
            href="https://better-tw-t-ter.vercel.app/"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
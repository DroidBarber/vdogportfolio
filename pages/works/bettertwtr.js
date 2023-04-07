import {
  Container,
  Badge,
  Link,
  List,
  Heading,
  Center,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="twttr">
    <Container>
      <Title>
        better Tw*tter <Badge>2023</Badge>
      </Title>
      <P>
        In this project we build and deploy a better Tw*tter clone from scratch with Next 13 as a Frontend Framework, Prisma as an ORM and MongoDB as a database that includes features such as :<br/>

        <UnorderedList my={4}>
          <ListItem>Authentication system</ListItem>
          <ListItem>Notification system</ListItem>
          <ListItem>Image Upload using Base64 strings</ListItem>
          <ListItem>Prisma ORM with MongoDB</ListItem>
          <ListItem>Responsive Layout</ListItem>
          <ListItem>1 To Many Relations (User - Post)</ListItem>
          <ListItem>Many To Many Relations (Post - Comment)</ListItem>
          <ListItem>Following functionality</ListItem>
          <ListItem>Comments / Replies functionality</ListItem>
          <ListItem>Likes functionality</ListItem>
          <ListItem>Vercel Deployment</ListItem>
        </UnorderedList>

        <Heading as="h4" fontSize={16} my={6}>
          <Center>⚠️ Warning</Center>
        </Heading>
        Note that this project is purely for educational purposes, the censoring implemented is just to avoid any confusion and prevent it from being mistaken as a phishing website.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://better-tw-t-ter.vercel.app/" target="_blank">
            betterTw*tter <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github Link</Meta>
          <Link href="https://github.com/DroidBarber/betterTw-t-ter" target="_blank">
            Github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.JS, Typescript, Tailwind CSS, Prisma, MongoDB, NextAuth, SWR, Vercel</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/btrtwtr1.png" alt="btrtwtr"/>
      <WorkImage src="/images/works/btrtwtr4.png" alt="btrtwtr"/>
      <WorkImage src="/images/works/btrtwtr2.png" alt="btrtwtr"/>
      <WorkImage src="/images/works/btrtwtr3.png" alt="btrtwtr"/>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
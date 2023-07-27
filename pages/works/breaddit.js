import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Breaddit">
    <Container>
      <Title>
        Breaddit <Badge>2023</Badge>
      </Title>
      <P>
        Introducing Breaddit a Next 13 app where registered users submit content such as links, posts, images, etc which are then voted up or down by other members, with features such as : <br/>
        <UnorderedList my={4}>
          <ListItem>Infinite scrolling for dynamically loading posts</ListItem>
          <ListItem>Authentication using NextAuth</ListItem>
          <ListItem>Custom feeds for authenticated users</ListItem>
          <ListItem>Advanced caching using Redis Upstash</ListItem>
          <ListItem>Data fetching using React-Query</ListItem>
          <ListItem>Image uploads & link previews</ListItem>
          <ListItem>Full comment functionality with nested replies</ListItem>
        </UnorderedList>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href='https://breadditt.vercel.app/' target='_blank'>
            Breaddit <ExternalLinkIcon mx="2"/>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.JS 13.4, Typescript, TailwindCSS, NextAuth, EditorJS, Prisma, Radix-ui, shadcn-ui, uploadthing, Planetscale, Upstash Redis, lucide</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/breaddit1.png" alt="breaddit"/>
      <WorkImage src="/images/works/breaddit2.png" alt="breaddit"/>
      <WorkImage src="/images/works/breaddit3.png" alt="breaddit"/>
      <WorkImage src="/images/works/breaddit4.png" alt="breaddit"/>
      <WorkImage src="/images/works/breaddit5.png" alt="breaddit"/>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
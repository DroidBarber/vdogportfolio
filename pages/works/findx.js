import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="findx">
    <Container>
      <Title>
        FindX <Badge>2021</Badge>
      </Title>
      <P>
        FindX is a Search engine App built with React.js and Tailwindcss  with the ability to search for up-to-date results, news, images, and videos, modern UI, dark mode, and completely responsive design based on Google Search and the Google Search API powered by {' '}<Link href="https://rapidapi.com/hub" target="_blank">rapidapi</Link>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://find-x.vercel.app/search" target="_blank">
          FindX <ExternalLinkIcon mx="2px"/>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>PLatform</Meta>
          <span>Web/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.JS, TailwindCSS</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/findx1.png" alt="search" />
      <WorkImage src="/images/works/findx3.png" alt="search" />
      <WorkImage src="/images/works/findx2.png" alt="search" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'